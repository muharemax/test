FROM maven:3-openjdk-8
RUN git clone https://github.com/kkenan/basic-microservices /data/app
WORKDIR /data/app
RUN rm -R node-app
WORKDIR /data/app/spring-boot-app
RUN ["mvn", "package"]
EXPOSE 8080
CMD ["java","-jar","target/spring-boot-app-1.0-SNAPSHOT.jar"]