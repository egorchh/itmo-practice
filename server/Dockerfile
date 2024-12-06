# Базовый образ для сборки
FROM node:18-alpine as builder

# Рабочая директория
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Копируем данные
COPY data ./data

# Финальный образ
FROM node:18-alpine

WORKDIR /app

# Копируем файлы из builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/data ./data

# Устанавливаем только production зависимости
RUN npm ci --only=production

# Определяем переменные окружения
ENV PORT=4444
ENV NODE_ENV=production

# Открываем порт
EXPOSE 4444

# Запускаем сервер
CMD ["node", "src/index.js"]
