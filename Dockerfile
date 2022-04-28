FROM node:alpine
RUN apk add --no-cache git
RUN apk add --no-cache openssh
WORKDIR /data/app
RUN git clone https://github.com/muharemax/test /data/app
WORKDIR /data/app/node-app
RUN npm install
EXPOSE 4545
CMD [ "node", "index.js" ]