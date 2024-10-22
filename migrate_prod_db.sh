#!/bin/bash

docker exec -it diamond-app sh -c "npx prisma migrate deploy"