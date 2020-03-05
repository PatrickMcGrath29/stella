#!/bin/bash
cd /home/patrickmcgrath/stella
git pull
sudo docker-compose down webserver nodejs
sudo docker-compose up -d --no-deps --build webserver nodejs
