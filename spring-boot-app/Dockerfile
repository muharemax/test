FROM openjdk:8-jdk-alpine
RUN apk add --no-cache git
RUN apk add --no-cache openssh
WORKDIR /data/app
RUN git clone https://github.com/kkenan/basic-microservices /data/app
RUN rm -R node-app
WORKDIR /data/app/spring-boot-app