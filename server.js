const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());

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
  apis: ['./server.js'],
};

const specs = swaggerJsdoc(options);
const swaggerOptions = {
  customCss: '.swagger-ui .topbar { display: none; }',
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerOptions));

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
  res.send('<h1>Добро пожаловать в lovlyAPI</h1><p>Это сервер портфолио, демонстрирующий навыки бэкенд-разработки.</p><p>Доступные маршруты: <a href="/about">/about</a>, <a href="/api/data">/api/data</a>, <a href="/api/users">/api/users</a>, <a href="/api-docs">API Documentation</a></p>');
});

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

  /**
  * @swagger
  * /api/users:
  *   get:
  *     summary: Получить список пользователей
  *     description: Возвращает список всех пользователей с возможностью фильтрации
  *     parameters:
  *       - name: limit
  *         in: query
  *         description: Ограничение количества возвращаемых записей
  *         required: false
  *         type: integer
  *         default: 10
  *       - name: offset
  *         in: query
  *         description: Смещение для пагинации
  *         required: false
  *         type: integer
  *         default: 0
  *     responses:
  *       200:
  *         description: Успешный ответ со списком пользователей
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 success:
  *                   type: boolean
  *                   description: Статус успешности запроса
 *                 count:
  *                   type: integer
  *                   description: Общее количество пользователей
  *                 data:
  *                   type: array
  *                   items:
  *                     type: object
  *                     properties:
  *                       id:
  *                         type: integer
  *                         description: ID пользователя
  *                       name:
  *                         type: string
  *                         description: Имя пользователя
  *                       email:
  *                         type: string
  *                         description: Email пользователя
  *                       role:
  *                         type: string
  *                         description: Роль пользователя
  *             example:
  *               success: true
  *               count: 2
  *               data:
  *                 - id: 1
  *                   name: lovly
  *                   email: lovly@example.com
  *                   role: Admin
  *                 - id: 2
  *                   name: Artem
  *                   email: artem@example.com
  *                   role: User
  *       500:
  *         description: Ошибка сервера
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 success:
  *                   type: boolean
  *                   description: Статус успешности запроса
 *                 message:
  *                   type: string
  *                   description: Описание ошибки
  *             example:
  *               success: false
  *               message: Произошла ошибка при получении пользователей
  *  */
  app.get('/api/users', (req, res) => {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const users = [
        { "id": 1, "name": "Alice", "email": "alice@example.com", "role": "Admin" },
        { "id": 2, "name": "Bob", "email": "bob@example.com", "role": "User" }
      ];
      const result = {
        success: true,
        count: users.length,
        data: users.slice(parseInt(offset), parseInt(offset) + parseInt(limit))
      };
      res.json(result);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Произошла ошибка при получении пользователей'
      });
    }
  });

  /**
  * @swagger
  * /api/users:
  *   post:
  *     summary: Создать нового пользователя
  *     description: Добавляет нового пользователя в систему
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               name:
  *                 type: string
  *                 description: Имя пользователя
  *                 required: true
  *               email:
  *                 type: string
  *                 description: Email пользователя
  *                 required: true
  *               role:
  *                 type: string
  *                 description: Роль пользователя
  *                 default: User
  *           example:
  *             name: John Doe
  *             email: john@example.com
  *             role: User
  *     responses:
  *       201:
  *         description: Пользователь успешно создан
  *         content:
  *           application/json:
 *             schema:
  *               type: object
  *               properties:
  *                 success:
  *                   type: boolean
  *                   description: Статус успешности запроса
  *                 message:
  *                   type: string
  *                   description: Описание результата
  *                 data:
  *                   type: object
  *                   properties:
  *                     id:
  *                       type: integer
  *                       description: ID созданного пользователя
  *                     name:
  *                       type: string
  *                       description: Имя пользователя
  *                     email:
  *                       type: string
  *                       description: Email пользователя
  *                     role:
  *                       type: string
  *                       description: Роль пользователя
  *             example:
  *               success: true
  *               message: Пользователь успешно создан
  *               data:
  *                 id: 3
  *                 name: John Doe
  *                 email: john@example.com
  *                 role: User
  *       400:
  *         description: Некорректные данные
  *         content:
  *           application/json:
 *             schema:
  *               type: object
  *               properties:
  *                 success:
  *                   type: boolean
  *                   description: Статус успешности запроса
  *                 message:
  *                   type: string
  *                   description: Описание ошибки
  *             example:
  *               success: false
  *               message: Имя и email обязательны для заполнения
  *  */
  app.post('/api/users', (req, res) => {
    const { name, email, role = 'User' } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Имя и email обязательны для заполнения'
      });
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      role
    };

    res.status(201).json({
      success: true,
      message: 'Пользователь успешно создан',
      data: newUser
    });
  });

app.use((req, res) => {
  res.status(404).send('<h1>404 - Страница не найдена</h1><p>Запрашиваемая страница не существует.</p>');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Порт ${PORT} занят. Попробуйте другой порт.`);
    } else {
      console.log('Произошла ошибка:', err);
    }
  });
}

module.exports = app;