# BUILD FOR LOCAL DEVELOPMENT

FROM node:16-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g yarn

RUN yarn install

COPY . .

# BUILD FOR PRODUCTION

FROM node:16-alpine As build

WORKDIR /usr/src/app

COPY package*.json ./

COPY --from=development /usr/src/app/node_modules ./node_modules

COPY . .

RUN yarn build

ENV NODE_ENV production

RUN yarn install --only=production && yarn cache clean --force

# PRODUCTION

FROM node:16-alpine As production

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]