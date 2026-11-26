# JWT Authentication System

## Backend Developer Internship Project

A secure user authentication API built using Node.js, Express.js, MongoDB, JWT, and bcrypt.

## Features
- User Registration
- Password Hashing using bcrypt
- User Login
- JWT Token Generation
- Authentication Middleware
- Protected Routes
- Public Routes
- Input Validation
- Error Handling

## Technologies
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

## API Endpoints

| Method | Endpoint | Access |
|---|---|---|
| POST | /api/auth/register | Public |
| POST | /api/auth/login | Public |
| GET | /api/auth/health | Public |
| GET | /api/auth/profile | Protected |

## Installation

```bash
npm install
```

## Environment Variables

Configure `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

## Run Project

```bash
npm run dev
```

## Authentication

Protected endpoints require a JWT token in the Authorization header:

`Authorization: Bearer <token>`

## Author

Fakeha Yamna Siddiqui
Backend Developer Internship
