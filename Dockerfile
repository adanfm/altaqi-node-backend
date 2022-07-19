FROM node:14.15.4-slim

COPY . /app

WORKDIR /app

CMD ["sh","-c", "npm install && npm run start"]