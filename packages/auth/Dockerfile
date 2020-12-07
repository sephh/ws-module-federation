FROM node:12.4.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
RUN apk --no-cache update && apk add --no-cache bash=4.4.19-r1
RUN apk add --no-cache gettext=0.19.8.1-r4
COPY ./ /app/
RUN npm run build

# production environment
FROM nginx:stable as base
WORKDIR /usr/src/app
COPY entrypoint.sh entrypoint.sh
COPY /default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/auth
RUN chmod +x entrypoint.sh
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx /etc/nginx/
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
EXPOSE 8080
ENTRYPOINT ["sh", "entrypoint.sh", "auth"]
