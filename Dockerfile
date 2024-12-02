FROM node:22.5.1 AS build

ADD . .

RUN yarn install && yarn run prebuild && yarn run build

FROM caddy AS runtime

EXPOSE 80

COPY --from=build /dist /usr/share/caddy/
