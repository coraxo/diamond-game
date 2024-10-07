#!/bin/bash

if [ "$1" == "stop" ]; then
  docker-compose -f docker-compose.production.yml down
else
  docker-compose -f docker-compose.production.yml up -d
fi