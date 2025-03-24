from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from config import Config
from models import User
import jwt
import datetime
from functools import wraps
from werkzeug.security import check_password_hash  # Correct import for checking hashed passwords
from flasgger import Swagger
import logging

# Initialize logger
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s %(levelname)s %(message)s',  # Include timestamp, log level, and message
    handlers=[
        logging.FileHandler('app.log'),  # Log messages to a file
        logging.StreamHandler()  # Also log to the console
    ]
)

logger = logging.getLogger(__name__)

# Create Flask app with Swagger
def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize MongoDB connection
    mongo = PyMongo(app)

    # Initialize Swagger for automatic API documentation
    swagger = Swagger(app)

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
            except:
                return jsonify({"message": "Token is invalid!"}), 403

            return f(*args, **kwargs)
        return decorated_function

    # User Registration Endpoint
    @app.route('/register', methods=['POST'])
    def register_user():
        """
        Register a new user.
        ---
        parameters:
          - name: username
            in: body
            required: true
            type: string
          - name: email
            in: body
            required: true
            type: string
          - name: password
            in: body
            required: true
            type: string
        responses:
          201:
            description: User registered successfully
          400:
            description: User already exists
        """
        data = request.get_json()

        # Check if user with the same email exists
        existing_user = User.find_by_email(mongo, data['email'])
        if existing_user:
            logger.warning(f"Attempted registration with existing email: {data['email']}")
            return jsonify({"message": "User already exists!"}), 400

        # Create a new user
        user = User(data['username'], data['email'], data['password'])
        user.save(mongo)
        logger.info(f"User registered successfully: {data['email']}")
        return jsonify({"message": "User registered successfully!"}), 201

    # User Login Endpoint
    @app.route('/login', methods=['POST'])
    def login_user():
        """
        Log in an existing user.
        ---
        parameters:
          - name: email
            in: body
            required: true
            type: string
          - name: password
            in: body
            required: true
            type: string
        responses:
          200:
            description: Login successful
          401:
            description: Invalid credentials
        """
        data = request.get_json()

        logger.debug(f"Attempting login with email: {data['email']}")

        user = User.find_by_email(mongo, data['email'])
        if not user:
            logger.warning(f"Login attempt failed, user not found: {data['email']}")
            return jsonify({"message": "Invalid credentials!"}), 401

        # Check if password matches
        if not check_password_hash(user.password, data['password']):
            logger.warning(f"Login attempt failed, password does not match for user: {data['email']}")
            return jsonify({"message": "Invalid credentials!"}), 401

        # Create JWT token
        payload = {
            "email": user.email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)  # Expiry after 1 hour
        }
        token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')

        logger.info(f"Login successful for user: {data['email']}")
        return jsonify({"token": token}), 200

    # Example Protected Endpoint (You can enable it by removing the comment)
    # @app.route('/protected', methods=['GET'])
    # @token_required
    # def protected():
    #     return jsonify({"message": "This is a protected endpoint!"}), 200

    return app
