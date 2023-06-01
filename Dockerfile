FROM node:19.6

RUN apt-get update && \
    apt-get install -y libc6-dev

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
