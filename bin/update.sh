#!/bin/bash
cd /home/patrickmcgrath/stella
git pull
sudo docker-compose restart webserver
sudo docker-compose up -d --no-deps --build nodejs
