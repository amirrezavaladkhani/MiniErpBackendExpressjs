# Mini ERP Backend - Express.js

A modern and scalable ERP backend architecture built with Express.js, Prisma ORM, and PostgreSQL.

This project is being developed as a modular and production-ready backend system with clean architecture principles.

---

# 🚀 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Zod Validation
- ESLint + Prettier
- ESM Modules

---

# 📁 Project Structure

```txt
src/
├── config/
├── constants/
├── middlewares/
├── modules/
│   └── user/
│       ├── user.controller.js
│       ├── user.repository.js
│       ├── user.routes.js
│       ├── user.schema.js
│       └── user.service.js
├── routes/
├── utils/
├── app.js
└── server.js
```

---

# ✨ Features

## Authentication System

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Current User Endpoint

---

## Authorization (RBAC)

- Role-Based Access Control
- Authorization Middleware
- Admin Protected Routes

---

## Validation & Error Handling

- Zod Schema Validation
- Global Error Middleware
- Async Handler
- Centralized Error Responses
- Custom AppError Class

---

## Security

- Helmet
- CORS
- Password Hashing (bcrypt)

---

# 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/amirrezavaladkhani/MiniErpBackendExpressjs.git
```

Move into project directory:

```bash
cd MiniErpBackendExpressjs
```

Install dependencies:

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/mini_erp"

JWT_SECRET=your_jwt_secret
```

---

# 🗄 Prisma Setup

Run migrations:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

---

# ▶️ Run Project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

# 🔐 API Endpoints

## Authentication

### Register

```http
POST /api/users/register
```

### Login

```http
POST /api/users/login
```

### Current User

```http
GET /api/users/me
```

Requires Bearer Token.

---

# 📌 Roadmap

- [x] Authentication System
- [x] Global Error Handling
- [ ] RBAC Authorization
- [ ] User Management APIs
- [ ] Pagination & Filtering
- [ ] Product Module
- [ ] Invoice Module
- [ ] Employee Module
- [ ] Docker Support
- [ ] Swagger Documentation
- [ ] Testing

---

# 🧠 Architecture

This project follows a layered architecture:

```txt
Request
 ↓
Middleware
 ↓
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

# 📄 License

ISC

---

# 👨‍💻 Author

GitHub:
https://github.com/amirrezavaladkhani
