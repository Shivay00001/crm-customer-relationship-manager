# CRM Customer Relationship Manager

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue.svg)](https://www.postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **production-grade Customer Relationship Management (CRM) system** built with Node.js, TypeScript, and PostgreSQL. This platform provides a centralized hub for managing customer interactions, lead tracking, and sales pipelines, designed for scalability and high performance.

## 🚀 Features

- **Lead Management**: Efficiently track and qualify potential customers through dedicated lead pipelines.
- **Customer Profiles**: Comprehensive 360-degree view of customer data, including contact history and preferences.
- **Opportunity Tracking**: Manage the sales lifecycle with multi-stage opportunity tracking and forecasting.
- **Role-Based Access Control (RBAC)**: Secure access to sensitive customer data based on user roles (Admin, Sales, Support).
- **Activity Logging**: Automated tracking of emails, calls, and meetings associated with each contact.
- **Containerized**: Full stack deployment (App + DB) via Docker Compose for easy environment parity.

## 📁 Project Structure

```
crm-customer-relationship-manager/
├── src/
│   ├── controllers/  # API request handlers
│   ├── entities/     # Database models (TypeORM/Prisma)
│   ├── services/     # Business logic layer
│   └── app.ts        # Express application setup
├── tests/            # Integration and unit tests
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## 🛠️ Quick Start

```bash
# Clone
git clone https://github.com/Shivay00001/crm-customer-relationship-manager.git

# Install
npm install

# Run with Docker
docker-compose up --build
```

## 📄 License

MIT License
