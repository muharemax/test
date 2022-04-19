FROM node:alpine
RUN apk add --no-cache git
RUN apk add --no-cache openssh
WORKDIR /data
RUN git clone https://github.com/kkenan/basic-microservices.git /data/app
WORKDIR /data/app/node-app
EXPOSE 8081
CMD [ "node", "index.js" ]