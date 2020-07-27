FROM node:12
WORKDIR /usr/src/app
COPY ["app/package.json", "app/package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
EXPOSE 3010
RUN npm install -g nodemon
