FROM node:18-alpine
WORKDIR /server
COPY package.json .
RUN npm i 
COPY tsconfig.json .
EXPOSE 3333
CMD [ "npm", "run", "dev" ]