FROM node:18.19-alpine3.19 as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

COPY data ./data

FROM node:18.19-alpine3.19

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/data ./data

RUN npm ci --only=production

ENV PORT=5555
ENV NODE_ENV=production

EXPOSE 5555

CMD ["node", "src/index.js"]
