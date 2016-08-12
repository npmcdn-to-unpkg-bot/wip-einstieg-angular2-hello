FROM angular-cli:1.0.0-beta.11-webpack.2

ENV APP_DIR=/usr/src/app

RUN mkdir -p $APP_DIR
COPY package.json $APP_DIR
#COPY typings.json $APP_DIR

WORKDIR $APP_DIR

RUN npm install &&\
	npm cache clean

CMD ["ng", "serve", "--host", "0.0.0.0"]
