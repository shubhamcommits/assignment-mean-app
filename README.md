# Questionnaire MEAN App

A full-stack web application for creating and managing questionnaires, built using the MEAN stack (MongoDB, Express.js, Angular, and Node.js).

## Overview

This repository contains the source code for a Questionnaire application developed using the MEAN (MongoDB, Express.js, Angular, Node.js) stack. The deployed application can be accessed at: [https://questionnaire-mean-app.herokuapp.com](https://questionnaire-mean-app.herokuapp.com)

- **TypeScript:** Primary language for the Angular front-end and backend logic (48.8%).
- **HTML:** User interface structure (32.5%).
- **JavaScript:** Additional client/server logic (14.2%).
- **CSS:** Styles for the UI (4.5%).

## Functionality

- **User Interface:** Responsive web app built with Angular and styled with CSS.
- **CRUD Operations:** Create, read, update, and delete questionnaires.
- **Question Management:** Add, edit, and remove questions within a questionnaire.
- **Database:** Utilizes MongoDB to store questionnaire data.
- **API:** Node.js + Express.js backend exposes RESTful endpoints for the app.
- **Authentication:** (Typical in MEAN apps; confirm exact status in code.)
- **Deployment:** Hosted on Heroku for easy access.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shubhamcommits/assignment-mean-app.git
   cd assignment-mean-app
   ```

2. **Install Dependencies**:
   Backend and frontend dependencies should be installed as per directory structure (typically with `npm install`).

3. **Configure Environment**:
   - Set up a MongoDB database (local or cloud).
   - Configure connection URLs in environment file(s) (see `/server` or `/src/environments`).

4. **Run the Application**:
   ```
   # Start the backend (Node.js + Express)
   npm run server

   # In a new terminal, serve the frontend (Angular)
   npm start
   ```
   Application will be accessible at `http://localhost:4200/` by default.

## Features (Expected)

- Create new questionnaires and manage lists of questions.
- Edit and delete existing questionnaires.
- Store all data securely with MongoDB.
- RESTful API to interact with backend data.
- Responsive and interactive Angular-based front-end.

## License

See repository for license details.

---

**Author:** [shubhamcommits](https://github.com/shubhamcommits)
