# Full-Stack Take-Home Assignment

A lightweight **Full-Stack Task Manager** web application built with **React + Redux** on the frontend and **Node.js + Express + MongoDB** on the backend.  
Supports **user authentication**, **task management**, and **JWT-based secure sessions**.

---

## Features

### Authentication
- User **registration** (username, email, password)
- User **login** with JWT authentication
- Only logged-in users can see their own tasks

### Task Management
- **Add tasks** (title + status)
- **View all tasks** of the logged-in user
- **Toggle task status** (Pending / Completed)
- **Delete tasks**

### Frontend
- Built with **React** and **Redux Toolkit**
- Minimal and professional UI
- Global state management via Redux
- Axios for API calls
- Error and success notifications

### Backend
- **Node.js + Express** API
- MongoDB database (via Mongoose) for users and tasks
- RESTful routes:
  - `POST /auth/register` – Register new users
  - `POST /auth/login` – Login users
  - `GET /tasks` – Fetch all user tasks
  - `POST /tasks` – Create new task
  - `PUT /tasks/:id` – Toggle task status
  - `DELETE /tasks/:id` – Delete task
- Passwords securely hashed with **bcrypt**
- JWT authentication middleware for protected routes

---

## Tech Stack

| Frontend | Backend | Database |
|----------|---------|---------|
| React    | Node.js | MongoDB |
| Redux    | Express | Mongoose |
| Axios    | JWT     |         |

---

## Folder Structure

task-manager/
├─ server.js                   # Backend server entry point
├─ .env                        # Environment variables
├─ package.json                # Backend dependencies & scripts
├─ config/
│  └─ db.js                    # MongoDB connection setup
├─ controllers/
│  ├─ authController.js        # Register/Login logic
│  └─ taskController.js        # CRUD logic for tasks
├─ routes/
│  ├─ authRoutes.js            # Authentication routes
│  └─ taskRoutes.js            # Task routes
├─ models/
│  ├─ User.js                  # User schema
│  └─ Task.js                  # Task schema
├─ client/                     # React frontend
│  ├─ package.json             # Frontend dependencies & scripts
│  ├─ index.html               # Frontend entry HTML
│  └─ src/
│      ├─ App.jsx              # Main React component
│      ├─ api.js               # Axios API config
│      ├─ store.js             # Redux store
│      ├─ slices/
│      │   ├─ authSlice.js     # Redux slice for authentication
│      │   └─ taskSlice.js     # Redux slice for tasks
│      └─ components/
│          ├─ AuthPage.jsx     # Login/Register UI
│          └─ TasksPage.jsx    # Task list & actions UI
└─ README.md                   # Project documentation
