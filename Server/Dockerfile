FROM node:latest

WORKDIR /usr/src/app/frontend
COPY ./Frontend/dashboard/ .

RUN npm install @angular/cli
RUN npm install
RUN npm run build

WORKDIR /usr/src/app/backend
COPY ./Backend/dashboard/ .

RUN npm install

WORKDIR /usr/src/app/
RUN mv frontend/dist/dashboard backend/public

WORKDIR /usr/src/app/backend

EXPOSE 3000
CMD [ "npm", "run", "start-server"]


