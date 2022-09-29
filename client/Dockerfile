FROM node:16

# build step
# FROM build image
# npm install
# npm build
# 
# app step
# FROM app image
# copy output from build step
# serve using nginx (or npm package serve, but not ideal)

# as root:
# RUN create dockeruser &\
# create dir + chown to dockeruser
# USER dockeruser
# do shit
# .. npm build (look into npm package serve)

#RUN adduser dockeruser

#RUN mkdir /moviesquad

#RUN chown dockeruser /moviesquad

#USER dockeruser

# Create app directory
WORKDIR /usr/src/client

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 443
EXPOSE 8080

CMD [ "react-scripts", "start" ]