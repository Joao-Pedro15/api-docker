FROM node:16
WORKDIR /server

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
 && apt-get install -y wget \
 && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
 && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm i 
COPY tsconfig.json .
EXPOSE 3333
CMD [ "npm", "run", "dev" ]