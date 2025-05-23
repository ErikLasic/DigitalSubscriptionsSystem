from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from config import Config
from models import User
import jwt
import datetime
from functools import wraps
from werkzeug.security import check_password_hash
from flasgger import Swagger
import logging

# Logging configuration
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s %(levelname)s %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

# Create Flask app
def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    mongo = PyMongo(app)
    Swagger(app)

    # JWT Authentication Decorator
    def token_required(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            token = None
            if 'Authorization' in request.headers:
                token = request.headers['Authorization'].split(" ")[1]

            if not token:
                return jsonify({"message": "Token is missing!"}), 403

            try:
                data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
                current_user = User.find_by_email(mongo, data['email'])
                if not current_user:
                    return jsonify({"message": "User not found!"}), 404
            except jwt.ExpiredSignatureError:
                return jsonify({"message": "Token has expired!"}), 403
            except Exception as e:
                logger.error(f"JWT decode error: {e}")
                return jsonify({"message": "Token is invalid!"}), 403

            return f(current_user, *args, **kwargs)
        return decorated_function

    @app.route('/me', methods=['GET'])
    @token_required
    def get_current_user(current_user):
        """
        Get the current logged-in user's data.
        ---
        security:
          - bearerAuth: []
        responses:
          200:
            description: User data retrieved successfully
        """
        return jsonify({
    "id": current_user.id,
    "username": current_user.username,
    "email": current_user.email
}), 200

    @app.route('/register', methods=['POST'])
    def register_user():
        """
        Register a new user.
        ---
        requestBody:
          required: true
          content:
            application/json:
              schema:
                type: object
                required:
                  - username
                  - email
                  - password
                properties:
                  username:
                    type: string
                  email:
                    type: string
                  password:
                    type: string
        responses:
          201:
            description: User registered successfully
          400:
            description: User already exists or invalid input
        """
        data = request.get_json()
        if not data or not all(k in data for k in ('username', 'email', 'password')):
            return jsonify({"message": "Missing required fields!"}), 400

        if User.find_by_email(mongo, data['email']):
            logger.warning(f"Attempted registration with existing email: {data['email']}")
            return jsonify({"message": "User already exists!"}), 400

        user = User(data['username'], data['email'], data['password'])
        user.save(mongo)
        logger.info(f"User registered successfully: {data['email']}")
        return jsonify({"message": "User registered successfully!"}), 201

    @app.route('/login', methods=['POST'])
    def login_user():
        """
        Log in an existing user.
        ---
        requestBody:
          required: true
          content:
            application/json:
              schema:
                type: object
                required:
                  - email
                  - password
                properties:
                  email:
                    type: string
                  password:
                    type: string
        responses:
          200:
            description: Login successful
          401:
            description: Invalid credentials
        """
        data = request.get_json()
        if not data or not all(k in data for k in ('email', 'password')):
            return jsonify({"message": "Missing email or password!"}), 400

        user = User.find_by_email(mongo, data['email'])
        if not user or not check_password_hash(user.password, data['password']):
            logger.warning(f"Invalid login attempt for email: {data['email']}")
            return jsonify({"message": "Invalid credentials!"}), 401

        token = jwt.encode({
            "email": user.email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, app.config['SECRET_KEY'], algorithm='HS256')

        logger.info(f"Login successful for user: {data['email']}")
        return jsonify({"token": token}), 200

    # Example protected endpoint
    # @app.route('/protected', methods=['GET'])
    # @token_required
    # def protected(current_user):
    #     return jsonify({"message": f"Welcome {current_user.username}, this is protected!"})

    return app
