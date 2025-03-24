from werkzeug.security import generate_password_hash, check_password_hash

class User:
    def __init__(self, username, email, password=None, hashed_password=None):
        self.username = username
        self.email = email
        if hashed_password:
            self.password = hashed_password
        elif password:
            self.password = generate_password_hash(password)  # Hash the password during registration

    @staticmethod
    def find_by_email(mongo, email):
        # Find the user in the database by email
        user = mongo.db.users.find_one({"email": email})
        if user:
            # Return a User object with the hashed password for comparison during login
            return User(user["username"], user["email"], hashed_password=user["password"]) 
        return None

    def save(self, mongo):
        # Save the user to MongoDB
        user_data = {
            "username": self.username,
            "email": self.email,
            "password": self.password  # Store hashed password
        }
        mongo.db.users.insert_one(user_data)
