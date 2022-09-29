FROM node:16

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/server

RUN npm ci --only=production

EXPOSE 8080

ENV NODE_ENV = production

#CMD ["node", "server/server.js"]
CMD ["npm", "start"]
