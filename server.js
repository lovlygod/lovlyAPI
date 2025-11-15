const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON
app.use(express.json());
app.use(helmet());

// Swagger опции
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'lovlyAPI',
      version: '1.0.0',
      description: 'Документация API для lovlyAPI',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./server.js'], // файлы, содержащие аннотации swagger
};

const specs = swaggerJsdoc(options);
const swaggerOptions = {
  customCss: '.swagger-ui .topbar { display: none; }',
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerOptions));

// Главная страница
/**
 * @swagger
 * /:
 *   get:
 *     summary: Главная страница
 *     description: Возвращает приветственное сообщение и доступные маршруты
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
app.get('/', (req, res) => {
  res.send('<h1>Добро пожаловать в lovlyAPI</h1><p>Это сервер портфолио, демонстрирующий навыки бэкенд-разработки.</p><p>Доступные маршруты: <a href="/about">/about</a>, <a href="/api/data">/api/data</a>, <a href="/api-docs">API Documentation</a></p>');
});

// Страница о проекте
/**
 * @swagger
 * /about:
 *   get:
 *     summary: Страница о проекте
 *     description: Возвращает информацию о проекте
 *     responses:
 *       200:
 *         description: Успешный ответ
 */
app.get('/about', (req, res) => {
  res.send('<h1>О проекте lovlyAPI</h1><p>Это публичный Node.js сервер с простым REST API и веб-интерфейсом.</p><p>Создан для демонстрации навыков бэкенд-разработки.</p>');
});

// REST API endpoint
/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Получить данные
 *     description: Возвращает список пользователей
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID пользователя
 *                   name:
 *                     type: string
 *                     description: Имя пользователя
 *                   role:
 *                     type: string
 *                     description: Роль пользователя
 */
app.get('/api/data', (req, res) => {
  const data = [
    { "id": 1, "name": "Alice", "role": "Admin" },
    { "id": 2, "name": "Bob", "role": "User" }
  ];
  res.json(data);
});

// Обработка 404 ошибок
app.use((req, res) => {
  res.status(404).send('<h1>404 - Страница не найдена</h1><p>Запрашиваемая страница не существует.</p>');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

module.exports = app;