FROM node:20.6-slim
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
ENV DATABASE_URL=$DATABASE_URL
ENV PORT=$PORT
RUN npm ci --production
RUN npm install typescript
RUN npm cache clean --force
ENV NODE_ENV="production"
COPY . .
RUN npm run build
CMD [ "npm", "start" ]