FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "start", "--host"]