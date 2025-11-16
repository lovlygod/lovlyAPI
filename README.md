<h1 align="center">⚡ lovlyAPI</h1>

<p align="center">
  Lightweight, minimalistic and fast API engine built for rapid backend prototyping.<br>
  Designed to help developers move from idea → working API in minutes.
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/lovlygod/lovlyAPI?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/lovlygod/lovlyAPI?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/lovlygod/lovlyAPI?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/lovlygod/lovlyAPI?style=for-the-badge" />
</p>

---

## 🚀 Why lovlyAPI?

Most API frameworks are powerful — but too heavy for quick experiments.

`lovlyAPI` focuses on:

- ⚡ **Speed** — minimal overhead, fast startup  
- 🧩 **Simplicity** — tiny codebase, clean structure  
- 📦 **Minimalism** — only essentials, no bloat  
- 🚀 **Rapid prototyping** — perfect for MVPs & small tools  
- 🔧 **Developer tools** — built for people who love building APIs fast  

If you want something between “Flask simplicity” and “FastAPI performance” — lovlyAPI is for you.

---

## ✨ Features

- ⚡ Instant API creation
- 🔌 Built-in routing system
- 🧱 Minimalistic architecture
- 📁 Clean project structure
- 🧠 Easy to understand, easy to extend
- 🔄 Async-ready (future update)
- 🧪 Perfect for small tools, bots, microservices and API-driven scripts

---

## 📦 Installation

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

Server will be available at `http://localhost:3000`

### Endpoints

| Endpoint          | Method                          | Description             |
| ------------------ | ------------------------------- | ---------------------- |
| **`/`**      | `GET`   | Main page with greeting |
| **`/about`**   | `GET` | Project information |
| **`/api/data`** | `GET`   | REST API, returns JSON with example data  |
| **`/api/users`** | `GET`   | Get list of users with pagination and filtering |
| **`/api/users`** | `POST`   | Create a new user |
| **Any other route** | `GET` | Returns 404 error |

## Example API response

```json
[
  { "id": 1, "name": "Alice", "role": "Admin" },
  { "id": 2, "name": "Bob", "role": "User" }
]
```

## Public server

Public version of the server is hosted at [https://lovlyapi.onrender.com](https://lovlyapi.onrender.com)

## Requirements

- Node.js >= 18
- npm

## License
[MIT](LICENSE)

<div align="center">

### Made with ❤️ by [@lovly](https://t.me/lovlyswag)

**Star ⭐ this repo if you found it useful!**

</div>
