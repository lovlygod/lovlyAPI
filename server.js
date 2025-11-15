const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON
app.use(express.json());

// Главная страница
app.get('/', (req, res) => {
  res.send('<h1>Добро пожаловать в lovlyAPI</h1><p>Это сервер портфолио, демонстрирующий навыки бэкенд-разработки.</p><p>Доступные маршруты: <a href="/about">/about</a>, <a href="/api/data">/api/data</a></p>');
});

// Страница о проекте
app.get('/about', (req, res) => {
  res.send('<h1>О проекте lovlyAPI</h1><p>Это публичный Node.js сервер с простым REST API и веб-интерфейсом.</p><p>Создан для демонстрации навыков бэкенд-разработки.</p>');
});

// REST API endpoint
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