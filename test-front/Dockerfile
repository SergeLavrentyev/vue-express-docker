FROM node:15

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "yarn", "serve" ]