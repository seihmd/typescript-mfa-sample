FROM node:14-stretch

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run build

EXPOSE 8000
