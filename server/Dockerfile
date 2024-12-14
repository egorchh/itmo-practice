FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

COPY data ./data

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/data ./data

RUN npm ci --only=production

ENV PORT=4444
ENV NODE_ENV=production

EXPOSE 4444

CMD ["node", "src/index.js"]
