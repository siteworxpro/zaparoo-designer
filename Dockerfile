FROM node:22.5.1 AS build

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run prebuild && yarn run build

FROM caddy AS runtime

EXPOSE 80

COPY --from=build /dist /usr/share/caddy/

RUN addgroup -g 1000 caddy && adduser -u 1000 -G caddy -s /bin/sh -D caddy

RUN chown caddy:caddy /config/caddy && \
    chmod 700 /config/caddy && \
    chown -R caddy:caddy /data && \
    chmod -R 700 /data

USER caddy

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
