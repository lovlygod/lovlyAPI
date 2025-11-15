<div align="center">

<h1 style="margin-top: 24px;">lovlyAPI</h1>

<p style="font-size: 18px; margin-bottom: 24px;">
  <b>Публичный Node.js сервер с простым REST API и веб-интерфейсом, который демонстрирует навыки бэкенд-разработки и может использоваться посетителями портфолио.</b>
</p>

[Report Bug](https://github.com/lovlygod/lovlyAPI/issues) · [Request Feature](https://github.com/lovlygod/lovlyAPI/issues)

</div>

---

## ✨ Features

- 🚀 **Node.js сервер** - реализован на Node.js с использованием Express
- 🌐 **Веб-интерфейс** - главная страница с приветствием и информацией о проекте
- 📡 **REST API** - предоставляет JSON API для демонстрации навыков бэкенд-разработки
- 📄 **JSON API** - возвращает пример данных в формате JSON

## 🚀 Quick Start

### 1. Installation

```bash
git clone https://github.com/lovlygod/lovlyAPI.git
cd lovlyAPI
npm install
```

### 2. Usage

#### Run the server

```bash
npm start
```

Сервер будет доступен по адресу `http://localhost:3000`

### Endpoints

| Endpoint          | Method                          | Description             |
| ------------------ | ------------------------------- | ---------------------- |
| **`/`**      | `GET`   | Главная страница с приветствием |
| **`/about`**   | `GET` | Информация о проекте  |
| **`/api/data`** | `GET`   | REST API, возвращает JSON с примером данных  |
| **Any other route** | `GET` | Возвращает 404 ошибку |

## Пример API ответа

```json
[
  { "id": 1, "name": "Alice", "role": "Admin" },
  { "id": 2, "name": "Bob", "role": "User" }
]
```

## Публичный сервер

Публичная версия сервера размещена на [https://lovlyapi.onrender.com](https://lovlyapi.onrender.com)

## Requirements

- Node.js >= 18
- npm

## License
[MIT](LICENSE)

<div align="center">

### Made with ❤️ by [@lovly](https://t.me/lovlyswag)

**Star ⭐ this repo if you found it useful!**

</div>