FROM node:16

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

COPY . .

EXPOSE 8085

CMD ["pm2-runtime", "index.js"]
