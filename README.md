# 💊 E-Pharmacy Admin Dashboard ![Status](https://img.shields.io/badge/status-in%20progress-yellow)

A full-stack administrative web application designed for a medical store management system. It features a robust React frontend and a Node.js/Express backend connected to MongoDB, providing secure authentication, real-time data filtering, and comprehensive inventory, order, and supplier management.

---

## ✨ Features

### 🖥️ Frontend (React & TypeScript)
* **Responsive Layout:** Adaptive design tailored for desktop (1440px+) and tablet (768px+), with fluid behavior starting from mobile screens (320px+).
* **Authentication & Security:** Secure login via JWT with React Hook Form and Yup validation, protected private routes, and persistent sessions.
* **Dashboard Overview:** Aggregated statistics (products, suppliers, customers) alongside recent activity tables (recent customers, income/expenses).
* **Orders Management:** Tabular view of all store orders with user-name filtering and detailed customer info.
* **Product Catalog & Inventory:** Full CRUD operations for products featuring category sorting, stock tracking, and modal forms for adding/editing items.
* **Suppliers Management:** Complete supplier records tracking company info, delivery dates, amounts, statuses, and management modals.
* **Customer Base:** Dedicated client directory view with search filtering, email/phone details, and pagination.

### ⚙️ Backend (Node.js & Express)
* **RESTful API:** Structured architecture handling authentication, dashboard metrics, orders, products, suppliers, and customer entities.
* **Database Integration:** MongoDB with Mongoose models for secure, validated data persistence.
* **Security & Middleware:** JWT-based access and refresh token mechanisms, authorization middleware, CORS configuration, and robust error handling.

---

## 🛠️ Tech Stack

* **Frontend:** React, React Router, React Hook Form, Yup, Material UI (Date Pickers), BlueprintJS, CSS Modules / SASS.
* **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT (JSON Web Tokens), bcrypt.
* **Deployment & Tools:** Vite, Render (Backend hosting), Git, Postman.

---

## 🚀 API Endpoints Overview

### Authentication
* `POST /api/user/login` — Authenticate user and issue JWT token.
* `GET /api/user/logout` — Terminate user session.
* `GET /api/user/user-info` — Retrieve authenticated user profile details.

### Dashboard & Analytics
* `GET /api/dashboard` — Fetch summary stats, recent customers, and income/expenses overview.
* `GET /api/customers/:customerId` — Get detailed information and transaction history for a specific customer.

### Orders
* `GET /api/orders` — Retrieve all orders (supports query parameters for sorting and filtering).

### Products
* `GET /api/products` — Fetch product catalog and available categories.
* `POST /api/products` — Add a new product.
* `PUT /api/products/:productId` — Update an existing product.
* `DEL /api/products/:productId` — Remove a product from the database.

### Suppliers
* `GET /api/suppliers` — Retrieve the list of suppliers.
* `POST /api/suppliers` — Register a new supplier.
* `PUT /api/suppliers/:supplierId` — Update supplier details.

### Customers
* `GET /api/customers` — Fetch the complete client directory.

---

## 📦 Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* MongoDB instance (local or Atlas)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/e-pharmacy-admin.git](https://github.com/your-username/e-pharmacy-admin.git)
   cd e-pharmacy-admin
