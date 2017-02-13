FROM node:6.1

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm install -g express
RUN npm install -g nodemon
RUN npm install mongoose-seed

COPY . /app

CMD ["npm", "start"]

EXPOSE 3000