FROM node:16.19-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]

CMD ["run", "dev"]
