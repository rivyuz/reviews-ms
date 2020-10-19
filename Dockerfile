FROM tomcat:8.5.16-jre8-alpine

MAINTAINER Riviewz "contact@riviewz.com"

EXPOSE 8080

RUN rm -rf /usr/local/tomcat/webapps/*

COPY ./target/reviews-ms-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

CMD ["catalina.sh","run"]