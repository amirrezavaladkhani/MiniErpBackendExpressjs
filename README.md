# Mini ERP Backend Express.js

Modern Modular ERP Backend built with Node.js, Express.js, PostgreSQL, and Prisma ORM using scalable ESM architecture.

---

## 🚀 Tech Stack

- Node.js
- Express.js 5
- PostgreSQL
- Prisma ORM
- Zod Validation
- JWT Authentication
- Bcrypt
- ESLint
- Prettier

---

## 📁 Project Structure

```txt
src/
│
├── config/
│
├── modules/
│   └── user/
│       ├── user.controller.js
│       ├── user.service.js
│       ├── user.repository.js
│       ├── user.validation.js
│       └── user.routes.js
│
├── middlewares/
├── routes/
├── utils/
│
├── app.js
└── server.js
```

---

## 🏗 Architecture

This project follows a modern modular backend architecture:

```txt
Route
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Prisma ORM
 ↓
PostgreSQL
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/amirrezavaladkhani/MiniErpBackendExpressjs.git
```

---

### Navigate To Project

```bash
cd MiniErpBackendExpressjs
```

---

### Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=3000

NODE_ENV=development

JWT_SECRET=your_secret_key

DATABASE_URL="postgresql://postgres:password@localhost:5432/mini_erp"
```

---

## 🛢 Prisma Setup

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Migrations

```bash
npx prisma migrate dev
```

---

## ▶️ Run Development Server

```bash
npm run dev
```

---

## 🧹 Code Quality

### ESLint

```bash
npm run lint
```

### Fix ESLint Problems

```bash
npm run lint:fix
```

### Format Code

```bash
npm run format
```

---

## 📌 Goals Of This Project

- Build a scalable ERP backend architecture
- Learn modern Node.js backend engineering
- Practice modular architecture
- Implement authentication and authorization
- Improve clean code and project structure skills
- Create a production-style backend system

---

## 🔥 Planned Features

- User Authentication
- JWT Authorization
- Role Based Access Control (RBAC)
- Products Module
- Customers Module
- Invoice Module
- File Upload System
- Pagination & Filtering
- Swagger Documentation
- Docker Support
- Unit & Integration Testing

---

## 📄 License

ISC License

---

## 👨‍💻 Author

Amirreza Valadkhani
