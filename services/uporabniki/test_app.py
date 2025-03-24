import pytest
from app import create_app
from flask import jsonify
from flask_pymongo import PyMongo
from models import User
from werkzeug.security import generate_password_hash

@pytest.fixture
def app():
    # Create the app instance for testing
    app = create_app()
    yield app

@pytest.fixture
def client(app):
    # Provide a test client to interact with your app
    return app.test_client()

@pytest.fixture
def mongo(app):
    # Connect to an in-memory MongoDB or test MongoDB
    app.config["MONGO_URI"] = "mongodb://localhost:27017/test_db"
    mongo = PyMongo(app)
    return mongo

def test_register_user(client, mongo):
    # Test registration of a new user
    user_data = {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "testpassword"
    }

    # Attempt to register the user
    response = client.post('/register', json=user_data)

    # If the user already exists, we expect a 400 response
    if response.status_code == 400:
        assert b"User already exists!" in response.data
    else:
        # If the user was successfully registered, we expect a 201 response
        assert response.status_code == 201
        assert b"User registered successfully!" in response.data

def test_register_user_existing(client, mongo):
    # Test that attempting to register an already existing user returns an error
    user_data = {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "testpassword"
    }
    # Register user once
    client.post('/register', json=user_data)
    # Attempt to register the same user again
    response = client.post('/register', json=user_data)
    assert response.status_code == 400
    assert b"User already exists!" in response.data

def test_login_user(client, mongo):
    # First, register the user
    user_data = {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "testpassword"
    }
    client.post('/register', json=user_data)

    # Test login with correct credentials
    login_data = {
        "email": "testuser@example.com",
        "password": "testpassword"
    }
    response = client.post('/login', json=login_data)
    assert response.status_code == 200
    assert b"token" in response.data  # Check if the response contains the token

def test_login_user_invalid_password(client, mongo):
    # Register the user first
    user_data = {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "testpassword"
    }
    client.post('/register', json=user_data)

    # Test login with incorrect password
    login_data = {
        "email": "testuser@example.com",
        "password": "wrongpassword"
    }
    response = client.post('/login', json=login_data)
    assert response.status_code == 401
    assert b"Invalid credentials!" in response.data

def test_login_user_not_found(client, mongo):
    # Test login with a non-existing user
    login_data = {
        "email": "nonexistent@example.com",
        "password": "somepassword"
    }
    response = client.post('/login', json=login_data)
    assert response.status_code == 401
    assert b"Invalid credentials!" in response.data
