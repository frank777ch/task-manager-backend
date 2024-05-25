# Task Manager Backend

Este es el backend para la aplicación de gestión de tareas. Está construido con Node.js, Express y MongoDB.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y añade tus variables de entorno:
    ```env
    MONGO_URI=tu-mongodb-uri
    JWT_SECRET=tu-jwt-secret
    PORT=5000
    ```

5. Inicia el servidor:
    ```bash
    npm start
    ```

## Endpoints

### Autenticación

- **POST** `/api/auth/register`: Registro de usuario.
- **POST** `/api/auth/login`: Inicio de sesión de usuario.

### Tareas

- **POST** `/api/tasks`: Crear una tarea.
- **GET** `/api/tasks`: Obtener todas las tareas.
- **PUT** `/api/tasks/:taskId`: Actualizar una tarea.
- **DELETE** `/api/tasks/:taskId`: Eliminar una tarea.

### Cursos

- **POST** `/api/courses`: Crear un curso.
- **GET** `/api/courses`: Obtener todos los cursos.
- **PUT** `/api/courses/:courseId`: Actualizar un curso.
- **DELETE** `/api/courses/:courseId`: Eliminar un curso.

### Colegios

- **POST** `/api/schools`: Crear un colegio.
- **GET** `/api/schools`: Obtener todos los colegios.
- **PUT** `/api/schools/:schoolId`: Actualizar un colegio.
- **DELETE** `/api/schools/:schoolId`: Eliminar un colegio.

### Evaluaciones

- **POST** `/api/evaluations`: Crear una evaluación.
- **GET** `/api/evaluations`: Obtener todas las evaluaciones.
- **PUT** `/api/evaluations/:evaluationId`: Actualizar una evaluación.
- **DELETE** `/api/evaluations/:evaluationId`: Eliminar una evaluación.
