#!/bin/bash
cd /home/patrickmcgrath/stella
sudo docker-compose run certbot renew && sudo docker-compose kill -s SIGHUP webserver
sudo docker system prune -af
