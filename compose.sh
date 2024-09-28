#!/bin/bash

if [ "$1" == "stop" ]; then
  docker compose -f docker-compose.yml down
else
  docker compose -f docker-compose.yml up -d
fi