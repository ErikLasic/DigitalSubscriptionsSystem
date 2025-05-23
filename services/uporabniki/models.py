from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

class User:
    def __init__(self, username, email, password=None, hashed_password=None, user_id=None):
        self.id = user_id
        self.username = username
        self.email = email
        self.password = hashed_password if hashed_password else generate_password_hash(password)

    @staticmethod
    def find_by_email(mongo, email):
        user = mongo.db.users.find_one({"email": email})
        if user:
            return User(user["username"], user["email"], hashed_password=user["password"], user_id=str(user["_id"]))
        return None

    @staticmethod
    def find_by_id(mongo, user_id):
        user = mongo.db.users.find_one({"_id": ObjectId(user_id)})
        if user:
            return User(user["username"], user["email"], hashed_password=user["password"], user_id=str(user["_id"]))
        return None

    def save(self, mongo):
        user_data = {
            "username": self.username,
            "email": self.email,
            "password": self.password
        }
        result = mongo.db.users.insert_one(user_data)
        self.id = str(result.inserted_id)
