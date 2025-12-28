# 🔐 JWT-Based Authentication API

A backend authentication system built with **Node.js**, **Express**, and **MongoDB** that handles user registration, login, and protected routes using **JSON Web Tokens (JWT)**.

This project demonstrates real-world backend authentication patterns, clean architecture, and secure credential handling.

---

## 🚀 Features

- 🧑‍💻 User registration
- 🔑 User login with JWT authentication
- 🔒 Password hashing using bcrypt
- 🛡️ Protected routes with middleware
- 👮 Role-based authorization (user / admin)
- 🌱 Environment variable configuration

---

## 🧰 Tech Stack

- **Node.js** – JavaScript runtime
- **Express** – Backend web framework
- **MongoDB + Mongoose** – Database and ODM
- **JWT (JSON Web Tokens)** – Authentication
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management
- **nodemon** – Development auto-reload

---

## 📁 Project Routes
POST /auth/register → Register a new user
POST /auth/login → Login and receive a JWT
GET /auth/me → Get current user (protected)
GET /admin → Admin-only route