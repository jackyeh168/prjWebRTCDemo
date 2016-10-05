FROM node:6-slim
MAINTAINER Jack Yeh <jack59074@gmail.com>

RUN npm install pm2 -g

WORKDIR /data/myapp
ENTRYPOINT ["/data/myapp/run.sh"]

