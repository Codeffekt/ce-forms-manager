FROM node:18-alpine as build

# copy code and run build
WORKDIR /app
COPY ./*.json ./
COPY ./src ./src
RUN npm install --no-audit && npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist/ce-forms-manager /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /start

COPY ./start-app.sh .
CMD [ "sh", "start-app.sh" ]
