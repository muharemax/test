FROM node:alpine
RUN apk add --no-cache git
RUN apk add --no-cache openssh
WORKDIR /data/app
RUN git clone https://github.com/kkenan/basic-microservices /data/app
RUN rm -R spring-boot-app
WORKDIR /data/app/node-app
RUN npm install
EXPOSE 8081
CMD [ "node", "index.js" ]