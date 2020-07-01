FROM node:latest

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install package and dependencies files
COPY package*.json ./
COPY wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh

RUN npm install

RUN npm i -S express
RUN npm i -S body-parser
RUN npm i -S ejs pug
# RUN npm i -S method-override

RUN npm i -S react react-dom
RUN npm i -S react-router-dom
RUN npm i -S react-bootstrap
RUN npm i -S history

RUN npm i -D mysql
RUN npm i -D axios

RUN npm i -D webpack
RUN npm i -D webpack-cli
RUN npm i -D nodemon

RUN npm i -D babel-cli
RUN npm i -D babel-loader
RUN npm i -D babel-preset-env
RUN npm i -D babel-preset-stage-2 
RUN npm i -D babel-preset-react
RUN npm i -D babel-preset-es2015

# start app
CMD ["npm", "start"]
