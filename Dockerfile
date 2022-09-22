FROM node:16

WORKDIR /usr/src/app

RUN sudo apt-get update
RUN sudo apt-get -y upgrade

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
