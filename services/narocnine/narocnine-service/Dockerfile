# Use OpenJDK as the base image
FROM openjdk:17-jdk-slim as build

# Set the working directory
WORKDIR /app

# Copy the Maven build file and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the entire source code into the container
COPY src /app/src

# Build the application
RUN mvn clean package -DskipTests

# Use the official openjdk image for the runtime
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the jar from the build stage
COPY --from=build /app/target/narocnine-service-0.0.1-SNAPSHOT.jar /app/narocnine-service.jar

# Expose the port the application will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "narocnine-service.jar"]
