# 📋 Questionnaire MEAN App

> A full-stack web application for creating and managing questionnaires, built using the MEAN stack

[![Node.js](https://img.shields.io/badge/Node.js-9.8.0-green.svg)](https://nodejs.org/)
[![Angular](https://img.shields.io/badge/Angular-6.0.8-red.svg)](https://angular.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen.svg)](https://www.mongodb.com/atlas)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

## 📋 Overview

A comprehensive questionnaire management system built with the **MEAN** stack (MongoDB, Express.js, Angular, Node.js). This application allows users to create, edit, and manage questionnaires with an intuitive user interface and robust backend API.

**🌐 Live Demo:** [questionnaire-mean-app.herokuapp.com](https://questionnaire-mean-app.herokuapp.com)

## ✨ Features

- 📝 **Create Questionnaires** - Build custom questionnaires with multiple questions
- ✏️ **Edit & Update** - Modify existing questionnaires and questions
- 🗑️ **Delete** - Remove questionnaires you no longer need
- 📊 **Question Management** - Add, edit, and organize questions within questionnaires
- 🔐 **Secure Authentication** - JWT-based user authentication with bcrypt password hashing
- 🔄 **Real-time Updates** - Socket.io integration for live updates
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Backend (Node.js + Express)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 9.8.0 | Runtime environment |
| **Express.js** | 4.16.2 | Web framework |
| **MongoDB** | - | NoSQL database |
| **Mongoose** | 5.0.2 | MongoDB ODM |
| **JWT** | 8.1.1 | Authentication tokens |
| **bcrypt** | 1.0.3 | Password hashing |
| **Socket.io** | 2.1.1 | Real-time communication |
| **Morgan** | 1.9.0 | HTTP request logging |
| **CORS** | 2.8.4 | Cross-origin resource sharing |
| **Axios** | 0.18.0 | HTTP client |

### Frontend (Angular)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 6.0.8 | Frontend framework |
| **TypeScript** | - | Programming language |
| **Angular CLI** | 6.0.8 | Development tooling |
| **Karma** | - | Unit testing |
| **Protractor** | - | E2E testing |

## 📁 Project Structure

```
assignment-mean-app/
├── 📂 public/                      # Angular frontend application
│   ├── 📂 dist/public/            # Production build output
│   ├── 📂 e2e/                    # End-to-end test specs
│   ├── 📂 src/                    # Angular source code
│   │   ├── 📂 app/               # Application components & services
│   │   ├── 📂 assets/            # Static assets (images, icons)
│   │   └── 📂 environments/      # Environment configurations
│   ├── angular.json               # Angular CLI configuration
│   ├── tsconfig.json              # TypeScript configuration
│   ├── tslint.json                # TSLint configuration
│   └── package.json               # Frontend dependencies
│
├── 📂 src/                         # Backend source code
│   ├── 📂 api/
│   │   ├── 📂 controllers/       # Route controllers/handlers
│   │   ├── 📂 models/            # Mongoose data models
│   │   │   ├── index.js
│   │   │   └── question.model.js # Question schema
│   │   ├── 📂 routes/            # API route definitions
│   │   └── app.js                 # Express app configuration
│   ├── 📂 utils/                  # Utility functions
│   └── db.js                      # MongoDB connection setup
│
├── development.config.js           # Development environment config
├── nodemon.json                    # Nodemon configuration
├── package.json                    # Backend dependencies
└── server.js                       # Application entry point
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** v9.8.0 or higher
- **npm** v5.6.0 or higher
- **MongoDB** (local installation or MongoDB Atlas account)
- **Angular CLI** v6.0.8 (`npm install -g @angular/cli@6.0.8`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhamcommits/assignment-mean-app.git
   cd assignment-mean-app
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd public
   npm install
   cd ..
   ```

4. **Configure MongoDB connection**
   
   Update the database connection string in `src/db.js` with your MongoDB URI:
   ```javascript
   const dbURL = 'mongodb://localhost:27017/questionnaire-app';
   // OR for MongoDB Atlas:
   const dbURL = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/questionnaire-app';
   ```

### Running the Application

#### Development Mode

1. **Start the backend server**
   ```bash
   npm run dev
   ```
   Backend will run at `http://localhost:3000`

2. **Start the Angular development server** (in a new terminal)
   ```bash
   cd public
   ng serve
   ```
   Frontend will be available at `http://localhost:4200`

#### Production Mode

1. **Build the Angular application**
   ```bash
   cd public
   ng build --prod
   cd ..
   ```

2. **Start the production server**
   ```bash
   npm start
   ```
   
   The complete application will be served at `http://localhost:3000`

## 📡 API Endpoints

All API routes are prefixed with `/api/posts`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/posts` | Retrieve all questionnaires |
| `GET` | `/api/posts/:id` | Get a specific questionnaire |
| `POST` | `/api/posts` | Create a new questionnaire |
| `PUT` | `/api/posts/:id` | Update a questionnaire |
| `DELETE` | `/api/posts/:id` | Delete a questionnaire |

### Example Request

```bash
# Create a new questionnaire
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Customer Satisfaction Survey",
    "questions": [
      {
        "text": "How satisfied are you with our service?",
        "type": "rating"
      }
    ]
  }'
```

## 🧪 Testing

### Backend Tests
```bash
npm test
```

### Frontend Unit Tests
```bash
cd public
ng test
```

### Frontend E2E Tests
```bash
cd public
ng e2e
```

## 🚢 Deployment

### Heroku Deployment

1. **Login to Heroku**
   ```bash
   heroku login
   ```

2. **Create Heroku app**
   ```bash
   heroku create questionnaire-mean-app
   ```

3. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=<your-mongodb-atlas-uri>
   ```

4. **Deploy**
   ```bash
   git push heroku master
   ```

### Manual Deployment

1. Build the frontend:
   ```bash
   cd public && ng build --prod && cd ..
   ```

2. Set `NODE_ENV=production`

3. Start the server:
   ```bash
   npm start
   ```

## 📊 Language Distribution

| Language | Percentage |
|----------|------------|
| TypeScript | 48.8% |
| HTML | 32.5% |
| JavaScript | 14.2% |
| CSS | 4.5% |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -m 'Add new feature'`)
4. **Push** to the branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the **ISC License**.

## 👤 Author

**Shubham Singh** - [@shubhamcommits](https://github.com/shubhamcommits)

---

<p align="center">
  Built with ❤️ using the MEAN Stack
</p>

