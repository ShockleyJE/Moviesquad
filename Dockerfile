FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

#COPY /server /server
COPY . . 

EXPOSE 2121

CMD ls -al 

CMD ["node", "server/server.js"]
