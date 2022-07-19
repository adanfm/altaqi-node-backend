#!/usr/bin/env bash

docker build -f ./Dockerfile -t altaqui/teste-backend .
docker run --publish 3000:3000 altaqui/teste-backend