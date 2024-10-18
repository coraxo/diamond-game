#!/bin/bash

if [ "$1" == "stop" ]; then
  docker-compose -f docker-compose.production.yml down
else
  echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin && git pull && docker pull coraxo/diamond-app:latest && docker-compose -f docker-compose.production.yml up -d
fi