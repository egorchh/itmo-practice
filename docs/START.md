# Как пользовать приложением

## Локальная разработка

### Запуск клиентской части

1. Установка зависимостей:
```bash
cd client
npm install
```

2. Запуск в режиме разработки:
```bash
npm run start
```

Клиент будет доступен по адресу: http://localhost:5173

### Запуск серверной части

1. Установка зависимостей:
```bash
cd server
npm install
```

2. Запуск в режиме разработки с автоматической перезагрузкой:
```bash
npm run dev
```

Сервер будет доступен по адресу: http://localhost:5555

### Доступные эндпоинты

#### Глоссарий

1. Получить все термины:
```bash
curl http://localhost:5555/glossary
```

2. Поиск термина:
```bash
curl http://localhost:5555/glossary?term=Стартап
```

#### MindMap

Получить данные для построения графа:
```bash
curl http://localhost:5555/mind-map
```

## Локальное развертывание через Docker

1. Клонируйте репозиторий:
```bash
git clone https://github.com/egorchh/itmo-practice.git
cd itmo-practice
```

2. Запустите приложение через Docker Compose:
```bash
docker-compose up --build
```

3. Приложение будет доступно по адресам:
- Frontend: http://localhost:80
- Backend: http://localhost:5555

#### Развертывание на Heroku

1. Установите Heroku CLI:
```bash
brew tap heroku/brew && brew install heroku
```

2. Залогиньтесь в Heroku:
```bash
heroku login
```

3. Создайте новое приложение:
```bash
heroku create your-app-name
```

4. Деплой серверной части:
```bash
git subtree push --prefix server heroku main
```

#### Развертывание на GitHub Pages

1. Соберите клиентскую часть:
```bash
cd client
npm install
npm run build
```

2. Настройте деплой через GitHub Actions или вручную через настройки репозитория в разделе Pages.