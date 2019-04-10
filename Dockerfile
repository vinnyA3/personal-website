FROM node:latest

COPY . /code

WORKDIR /code

RUN npm install

RUN npm run build

EXPOSE 3000:3000

CMD ["npm", "run", "start"]
