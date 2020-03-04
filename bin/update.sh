#!/bin/bash
cd ../
git pull
sudo docker-compose up -d --no-deps --build webserver nodejs
