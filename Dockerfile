FROM node:14.15.4-slim

USER node

COPY . /home/node/app

WORKDIR /home/node/app

CMD ["sh","-c", "yarn install && yarn start"]