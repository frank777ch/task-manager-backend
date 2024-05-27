const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/evaluations', require('./routes/evaluationRoutes'));
app.use('/api/schools', require('./routes/schoolRoutes'));
app.use('/api/users', require('./routes/userRoutes')); // Añadir esta línea

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));