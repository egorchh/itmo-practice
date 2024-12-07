# Отчет о проделанной работе

## Архитектура приложения

Проект реализован как полноценное веб-приложение с клиент-серверной архитектурой:

### Серверная часть (Backend)
- REST API на Node.js + Express
- Файловое хранилище данных в формате JSON
- Контейнеризация через Docker
- Развертывание на Heroku

### Клиентская часть (Frontend)
- Single Page Application на React + TypeScript
- Маршрутизация через React Router
- Визуализация графа через React Flow
- Развертывание на GitHub Pages

## Использованные технологии

### Backend
1. **Node.js + Express**
   - Быстрая разработка REST API
   - Большая экосистема пакетов
   - Легкое развертывание на различных платформах

2. **JSON Storage**
   - Простота реализации для небольших наборов данных
   - Удобство версионирования через Git
   - Возможность легкой миграции на СУБД при необходимости

3. **Docker**
   - Стандарт де-факто для контейнеризации
   - Простота развертывания
   - Воспроизводимость окружения

### Frontend
1. **React + TypeScript**
   - Типобезопасность кода
   - Компонентный подход
   - Большое community и готовые решения

2. **React Flow**
   - Специализированная библиотека для визуализации графов
   - Богатый набор готовых компонентов
   - Поддержка интерактивности

3. **Vite**
   - Быстрая сборка
   - Современный инструментарий
   - Оптимизация для production

## Функциональность приложения

### Глоссарий
![Страница глоссария](https://github.com/user-attachments/assets/186c6b66-ad8f-4341-ae31-2562bc83e9d4)

Страница глоссария предоставляет:
- Список всех терминов с определениями
- Поиск по терминам
- Удобную навигацию по алфавиту

### Семантический граф (MindMap)
![Страница с MindMap](https://github.com/user-attachments/assets/7f3fcc6b-3086-430c-9a84-dad86b4b3f63)

MindMap визуализирует:
- Связи между терминами
- Иерархию понятий
- Интерактивное взаимодействие с графом

### Обработка ошибок
![Обработка ошибок](https://github.com/user-attachments/assets/d1681199-46a9-4f29-870c-1e28b478e59a)

Реализована обработка различных ошибок:
- Отсутствие соединения с сервером
- Некорректные запросы
- Отсутствие данных

## API Endpoints

### GET /glossary
Получение списка всех терминов

```bash
curl https://itmo-practice-2b013173d1a7.herokuapp.com/glossary
```

Пример ответа:
```json
{
  "terms": [
    {
      "id": "1",
      "term": "API",
      "definition": "Application Programming Interface - набор определений...",
      "category": "programming"
    }
  ]
}
```

### GET /mind-map
Получение данных для построения семантического графа

```bash
curl https://itmo-practice-2b013173d1a7.herokuapp.com/mind-map
```

Пример ответа:
```json
{
  "nodes": [
    {
      "id": "1",
      "type": "term",
      "data": { "label": "API" }
    }
  ],
  "edges": [
    {
      "id": "e1-2",
      "source": "1",
      "target": "2"
    }
  ]
}
```

## CI/CD

Проект использует GitHub Actions для автоматизации процессов разработки и деплоя.

### Автоматический деплой на Heroku

Настроен автоматический деплой серверной части приложения на Heroku при каждом push в ветку main:
- Триггерится только при изменениях в папке `server/`
- Использует GitHub Actions и Heroku CLI
- Деплой происходит через git subtree
- Конфигурация находится в `.github/workflows/heroku-deploy.yml`

Процесс деплоя включает:
1. Установку Node.js и зависимостей
2. Аутентификацию в Heroku через API ключ
3. Деплой серверной части через git subtree

Для безопасности все чувствительные данные (API ключи, email) хранятся в GitHub Secrets.

## Структура данных

### Глоссарий
```typescript
interface Term {
  id: string;
  term: string;
  definition: string;
  category?: string;
  sources?: string[];
}
```

### MindMap
```typescript
interface Node {
  id: string;
  type: 'term';
  position: { x: number; y: number };
  data: {
    label: string;
    definition?: string;
  };
}

interface Edge {
  id: string;
  source: string;
  target: string;
  type?: 'straight' | 'bezier';
}
```

## Текущее состояние проекта

Приложение успешно развернуто и доступно по следующим адресам:
- Frontend: https://egorchh.github.io/itmo-practice/#/
- Backend: https://itmo-practice-2b013173d1a7.herokuapp.com/

Реализован полный функционал согласно требованиям задания:
- ✅ Глоссарий терминов с Web API
- ✅ Визуализация семантического графа
- ✅ Контейнеризация через Docker
- ✅ Документация по развертыванию
