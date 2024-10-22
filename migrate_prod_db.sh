#!/bin/bash

docker exec -i diamond-app sh -c "npx prisma migrate deploy"