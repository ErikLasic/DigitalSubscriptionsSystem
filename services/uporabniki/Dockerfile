# Use official Python image as the base image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port that the Flask app runs on
EXPOSE 5000

# Set the environment variable to enable Flask's development server
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run the Flask application
CMD ["flask", "run"]
