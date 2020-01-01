FROM node:12.14.0-alpine3.9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

CMD yarn start