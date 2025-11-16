<div align="center">

<h1 style="margin-top: 24px;">lovlyAPI</h1>

<p style="font-size: 18px; margin-bottom: 24px;">
  <b>Public Node.js server with simple REST API and web interface that demonstrates backend development skills and can be used by portfolio visitors.</b>
</p>

[Report Bug](https://github.com/lovlygod/lovlyAPI/issues) · [Request Feature](https://github.com/lovlygod/lovlyAPI/issues)

</div>

---

## ✨ Features

- 🚀 **Node.js server** - implemented on Node.js using Express
- 🌐 **Web interface** - main page with greeting and project information
- 📡 **REST API** - provides JSON API to demonstrate backend development skills
- 📄 **JSON API** - returns example data in JSON format

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