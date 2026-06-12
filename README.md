# 🚀 Mini ERP Backend

> A modern, scalable, and production-ready ERP backend built with **Express.js**, **Prisma ORM**, and **PostgreSQL**, following enterprise-grade architecture and RBAC authorization principles.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Backend-black?logo=express" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma" />
  <img src="https://img.shields.io/badge/JWT-Authentication-orange" />
  <img src="https://img.shields.io/badge/License-ISC-green" />
</p>

---

## ✨ Overview

This project demonstrates how to build a maintainable ERP backend using:

* 🏗 Modular Architecture
* 📚 Layered Architecture
* 🔐 JWT Authentication
* 🛡 Dynamic RBAC Authorization
* ✅ Request Validation with Zod
* 🗄 Prisma ORM + PostgreSQL
* 🚀 Production-ready project structure

---

## 🛠 Tech Stack

| Category       | Technologies     |
| -------------- | ---------------- |
| Runtime        | Node.js          |
| Framework      | Express.js       |
| Database       | PostgreSQL       |
| ORM            | Prisma           |
| Authentication | JWT              |
| Validation     | Zod              |
| Security       | Helmet, bcrypt   |
| Logging        | Morgan           |
| Code Style     | ESLint, Prettier |
| Module System  | ESM              |

---

## 🏛 Architecture

```text
Client
   │
   ▼
Middleware
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

---

## 📂 Project Structure

```text
src
├── config
├── constants
├── middlewares
├── modules
│   ├── user
│   ├── role
│   └── permission
├── routes
├── utils
├── app.js
└── server.js

prisma
├── migrations
├── schema.prisma
└── seed.js
```

---

## 🔥 Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Current User Endpoint

### 🛡 Authorization (RBAC)

* Dynamic Roles
* Dynamic Permissions
* Permission-based Authorization
* Role Management APIs
* Permission Assignment & Revocation
* Authorization Middleware

### 👥 User Management

* Create User
* Update User
* Soft Delete
* Restore User
* Get User by ID
* List Users
* Pagination
* Filtering & Search

### ✅ Validation & Error Handling

* Zod Validation
* Global Error Handler
* Async Wrapper
* Custom AppError
* Centralized Error Responses

### 🔒 Security

* Helmet
* bcrypt Password Hashing
* JWT Tokens
* Protected APIs
* CORS Support

---

## 🗄 RBAC Schema

```text
User
 │
 ▼
UserRole
 │
 ▼
Role
 │
 ▼
RolePermission
 │
 ▼
Permission
```

---

## 🚀 Getting Started

### Clone

```bash
git clone https://github.com/amirrezavaladkhani/MiniErpBackendExpressjs.git

cd MiniErpBackendExpressjs
```

### Install

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT=3000

DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/mini_erp"

JWT_SECRET=your_super_secret_key
```

### Prisma

```bash
npx prisma migrate dev

npx prisma generate

npx prisma db seed
```

### Run

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

---

## 📡 API Overview

### Authentication

| Method | Endpoint              |
| ------ | --------------------- |
| POST   | `/api/users/register` |
| POST   | `/api/users/login`    |
| GET    | `/api/users/me`       |

### Users

| Method | Endpoint                 |
| ------ | ------------------------ |
| GET    | `/api/users`             |
| GET    | `/api/users/:id`         |
| PATCH  | `/api/users/:id`         |
| DELETE | `/api/users/:id`         |
| PATCH  | `/api/users/:id/restore` |

### Roles

| Method | Endpoint                                       |
| ------ | ---------------------------------------------- |
| POST   | `/api/roles`                                   |
| GET    | `/api/roles`                                   |
| GET    | `/api/roles/:id`                               |
| PATCH  | `/api/roles/:id`                               |
| POST   | `/api/roles/:id/permissions`                   |
| DELETE | `/api/roles/:roleId/permissions/:permissionId` |

---

## 🗺 Roadmap

* ✅ Authentication
* ✅ JWT Authorization
* ✅ Layered Architecture
* ✅ Modular Architecture
* ✅ Global Error Handling
* ✅ RBAC System
* ✅ Dynamic Roles & Permissions
* ✅ User Management
* ✅ Pagination & Filtering
* ✅ Soft Delete & Restore
* ✅ Role Management
* ✅ Permission Assignment

### Upcoming

* ⏳ Assign Roles to Users
* ⏳ Remove Roles from Users
* ⏳ Refresh Tokens
* ⏳ Audit Logs
* ⏳ Rate Limiting
* ⏳ Swagger Documentation
* ⏳ Docker Support
* ⏳ File Uploads
* ⏳ Notification Module
* ⏳ Product Module
* ⏳ Employee Module
* ⏳ Invoice Module
* ⏳ Unit & Integration Tests

---

## 💡 Engineering Concepts

* Repository Pattern
* Service Layer Pattern
* Layered Architecture
* Modular Design
* RBAC
* ACL
* JWT Authentication
* Soft Delete Strategy
* Defensive Programming
* Validation Separation
* Centralized Error Handling

---

## 👨‍💻 Author

**Amirreza Valadkhani**

GitHub: **https://github.com/amirrezavaladkhani**

---

## 📄 License

Released under the **ISC License**.
