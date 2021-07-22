FROM node:12-alpine

# Create app directory
WORKDIR /app

COPY package.json /app

RUN npm install

# Bundle app source
COPY . /app

CMD [ "npm", "run", "start" ]

EXPOSE 4000

