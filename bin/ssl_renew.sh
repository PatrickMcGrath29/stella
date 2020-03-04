#!/bin/bash
cd ../
sudo docker-compose run certbot renew --dry-run && $COMPOSE kill -s SIGHUP webserver
sudo docker system prune -af
