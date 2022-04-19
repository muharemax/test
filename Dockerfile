FROM ubuntu:20.04

# Update aptitude with new repo
RUN apt-get -y update

RUN mkdir ludnica
