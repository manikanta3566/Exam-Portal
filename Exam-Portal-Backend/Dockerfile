# ====== Stage 1: Build the application ======
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copy pom.xml and download dependencies first (better caching)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code and build
COPY src ./src
RUN mvn clean package -DskipTests

# ====== Stage 2: Run the application ======
FROM  openjdk:21-slim AS runtime
WORKDIR /app

# Copy only the jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose application port
EXPOSE 8080

# Run with prod profile on 8080
ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=dev", "--server.port=8080"]





