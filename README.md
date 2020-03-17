# Stella

## Setup

NodeJS Application Setup
1. Run `bin/setup.sh` setup script
2. Create a new environment variable file, `cp .env.sample .env`, and modify accordingly

If using optional Nginx webserver & LetsEncrypt certificates
- Modify absolute paths to working directory in docker-compose.yml (device field in volume section)

## Running the application

NodeJS Standalone

1. `docker build -t stella .`
2. `docker run -p <PORT>:8080 -d --env-file .env stella`

NodeJS with Nginx webserver & LetsEncrypt certificates
- Start application with new certificates (first execution, manual renewal : `docker-compose up -d`
- Start application with existing certificates (subsequent executions with valid existing certificate) : `docker-compose up -d nodejs webserver`
