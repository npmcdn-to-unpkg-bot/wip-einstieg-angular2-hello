FROM node:5.12

ENV APP_DIR=/usr/src/app

RUN mkdir -p $APP_DIR
COPY package.json $APP_DIR
#COPY typings.json $APP_DIR

WORKDIR $APP_DIR

RUN npm install &&\
	npm cache clean

CMD ["ng", "serve", "--host", "0.0.0.0"]
