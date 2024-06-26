FROM node:18.18.2 as angular

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine3.18

WORKDIR /usr/local/apache2/htdocs
COPY --from=angular /app/dist/angular-frontend-test .
