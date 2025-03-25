# Task Management Web App

## Overview
This is a Task Management web application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). The application allows users to create, update, delete, and mark tasks as completed.

## Features
- Create, update, delete, and mark tasks as completed
- RESTful API for backend operations
- MongoDB for data persistence
- Fully responsive frontend using React/Next.js

## Tech Stack
- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB (Mongoose ODM)

---

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18+ recommended)
- **MongoDB** (Local or Cloud - e.g., MongoDB Atlas)
- **Git**

### Clone the Repository
```sh
git clone https://github.com/Aman86420/assment-algo.git
cd assment-algo
```

### Backend Setup
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure MongoDB connection:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The server will run at `http://localhost:5000`

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

---

## API Documentation
### Base URL
```
http://localhost:5000/api/tasks
```

### Endpoints
#### 1. Get All Tasks
- **Endpoint:** `GET /tasks`
- **Response:**
  ```json
  [
    {
      "id": "123",
      "title": "Sample Task",
      "description": "Task details",
      "completed": false
    }
  ]
  ```

#### 2. Create a Task
- **Endpoint:** `POST /tasks`
- **Body:**
  ```json
  {
    "title": "New Task",
    "description": "Task details"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Task created successfully"
  }
  ```

#### 3. Update a Task
- **Endpoint:** `PUT /tasks/:id`
- **Body:**
  ```json
  {
    "completed": true
  }
  ```
- **Response:**
  ```json
  {
    "message": "Task updated successfully"
  }
  ```

#### 4. Delete a Task
- **Endpoint:** `DELETE /tasks/:id`
- **Response:**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

## Testing the API
Use **Postman** or **cURL** to test the endpoints.
Example using cURL:
```sh
curl -X GET http://localhost:5000/api/tasks
```

---

## Author
- **[Your Name]** - Full-Stack Developer Intern

---

## License
This project is licensed under the MIT License.