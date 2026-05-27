# Mini ERP Backend - Express.js

A modern, scalable, and production-ready ERP backend architecture built with Express.js, Prisma ORM, and PostgreSQL.

This project is designed using modular architecture, layered architecture principles, and enterprise-level RBAC authorization systems.

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
- bcrypt
- Helmet
- Morgan

---

# 🏗 Architecture

This project follows a layered enterprise architecture:

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

📁 Project Structure

src/
├── config/
│   └── prisma.js
│
├── constants/
│   └── permissions.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── authorize.middleware.js
│   └── error.middleware.js
│
├── modules/
│   ├── user/
│   │   ├── user.controller.js
│   │   ├── user.repository.js
│   │   ├── user.routes.js
│   │   ├── user.service.js
│   │   └── user.validation.js
│   │
│   ├── role/
│   │   ├── role.controller.js
│   │   ├── role.repository.js
│   │   ├── role.routes.js
│   │   ├── role.service.js
│   │   └── role.validation.js
│   │
│   └── permission/
│       └── permission.repository.js
│
├── routes/
│   └── index.js
│
├── utils/
│   ├── appError.js
│   ├── asyncHandler.js
│   └── jwt.js
│
├── app.js
└── server.js

prisma/
├── migrations/
├── schema.prisma
└── seed.js


---

✨ Features

🔐 Authentication System

User Registration

User Login

JWT Authentication

Protected Routes

Current User Endpoint



---

🛡 Authorization & RBAC

Dynamic Role-Based Access Control (RBAC)

Permission-Based Authorization

Dynamic Roles & Permissions

Assign Role To User

Assign Permission To Role

Authorization Middleware

Enterprise ACL Structure



---

👥 User Management

Create User

Update User

Soft Delete User

Restore User

Get Single User

Get All Users

Pagination

Search & Filtering



---

🧠 Validation & Error Handling

Zod Validation

Global Error Middleware

Async Handler Wrapper

Centralized Error Responses

Custom AppError Class



---

🔒 Security

Helmet

CORS

Password Hashing (bcrypt)

JWT Token Authentication

Protected APIs



---

🗄 Database Design

Current RBAC architecture:

User
 ↓
UserRole
 ↓
Role
 ↓
RolePermission
 ↓
Permission


---

🛠 Installation

Clone repository:

git clone https://github.com/amirrezavaladkhani/MiniErpBackendExpressjs.git

Move into project directory:

cd MiniErpBackendExpressjs

Install dependencies:

npm install


---

⚙️ Environment Variables

Create a .env file in the root directory:

PORT=3000

DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/mini_erp"

JWT_SECRET=your_super_secret_key


---

🗄 Prisma Setup

Run migrations:

npx prisma migrate dev

Generate Prisma Client:

npx prisma generate

Run database seed:

npx prisma db seed


---

▶️ Run Project

Development mode:

npm run dev

Production mode:

npm start


---

🔐 API Endpoints

Authentication

Register

POST /api/users/register

Login

POST /api/users/login

Current User

GET /api/users/me


---

👥 Users

Get All Users

GET /api/users

Get Single User

GET /api/users/:id

Update User

PATCH /api/users/:id

Soft Delete User

DELETE /api/users/:id

Restore User

PATCH /api/users/:id/restore


---

🛡 Roles

Create Role

POST /api/roles

Get All Roles

GET /api/roles

Assign Role To User

POST /api/users/:id/roles


---

🔑 Permissions

Assign Permission To Role

POST /api/roles/:id/permissions


---

📌 Roadmap

[x] Authentication System

[x] JWT Authorization

[x] Modular Architecture

[x] Layered Architecture

[x] Global Error Handling

[x] RBAC Authorization

[x] Dynamic Roles & Permissions

[x] User Management APIs

[x] Pagination & Filtering

[x] Soft Delete & Restore System

[ ] Refresh Token System

[ ] Audit Logs

[ ] Rate Limiting

[ ] API Documentation (Swagger)

[ ] Docker Support

[ ] File Upload System

[ ] Notification System

[ ] Product Module

[ ] Invoice Module

[ ] Employee Module

[ ] Unit & Integration Testing



---

🧠 Engineering Concepts Used

Repository Pattern

Layered Architecture

Modular Architecture

RBAC (Role-Based Access Control)

ACL (Access Control List)

Soft Delete Architecture

Defensive Programming

Validation Layer Separation

Enterprise Authorization Flow



---

📄 License

ISC


---

👨‍💻 Author

GitHub: [Amirreza Valadkhani](https://github.com/amirrezavaladkhani?utm_source=chatgpt.com)