# Task Manager Backend

This is the backend of the Task Manager application, built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication
- Task management (create, update, delete, view)
- Course management (create, update, delete, view)
- Evaluation management (create, update, delete, view)
- School management (create, update, delete, view)

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project with the following content:
    ```env
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    PORT=5000
    ```

4. Start the server:
    ```sh
    npm start
    ```

### API Endpoints

#### Auth

- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Login a user

#### Tasks

- **POST** `/api/tasks`: Create a new task
- **GET** `/api/tasks`: Get all tasks
- **PUT** `/api/tasks/:taskId`: Update a task
- **DELETE** `/api/tasks/:taskId`: Delete a task

#### Courses

- **POST** `/api/courses`: Create a new course
- **GET** `/api/courses`: Get all courses
- **PUT** `/api/courses/:courseId`: Update a course
- **DELETE** `/api/courses/:courseId`: Delete a course

#### Evaluations

- **POST** `/api/evaluations`: Create a new evaluation
- **GET** `/api/evaluations`: Get all evaluations
- **PUT** `/api/evaluations/:evaluationId`: Update an evaluation
- **DELETE** `/api/evaluations/:evaluationId`: Delete an evaluation

#### Schools

- **POST** `/api/schools`: Create a new school
- **GET** `/api/schools`: Get all schools
- **PUT** `/api/schools/:schoolId`: Update a school
- **DELETE** `/api/schools/:schoolId`: Delete a school
