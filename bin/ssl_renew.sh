#!/bin/bash
cd /home/patrickmcgrath/stella

sudo docker-compose --no-ansi run certbot renew
sudo docker-compose restart webserver
# TODO: Prune certbot container without systemwide prune
# sudo docker system prune -af
