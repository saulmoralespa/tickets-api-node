FROM node:20

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_PORT=8888

EXPOSE ${NODE_PORT}

CMD [ "npm", "start" ]