FROM node:18

WORKDIR /app

COPY backend ./backend
COPY public ./public
COPY package*.json ./

WORKDIR /app/backend
RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]
