# 🔐 Node.js Login System

A simple **login and authentication system** built with **Node.js, Express, and express-session**.  
It supports login, logout, session handling, and redirects users based on authentication status.

---

## 🚀 Features
- User login with username & password
- Session-based authentication
- Protected routes (only accessible when logged in)
- Logout with session destroy
- Universal redirection for undefined routes
- hbs views for rendering login & dashboard pages

---

## 🛠️ Tech Stack
- **Node.js** (Backend runtime)
- **Express.js** (Web framework)
- **express-session** (Session handling)
- **hbs** (Template engine)
- **Bootstrap / CSS** (Frontend styling)

---

## 📂 Project Structure
Login/
│-- routes/
│ └── user.js # Login, verify, index, logout, fallback routes
│-- middlewares/
│ └── authMiddleware.js # Protects routes
│-- views/
│ ├── login.ejs # Login page
│ └── index.ejs # Dashboard page
│-- app.js # Main entry file
│-- package.json
│-- README.md
