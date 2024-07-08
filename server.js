// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');

dotenv.config();
connectDB();

const app = express();

// Deshabilitar el encabezado 'x-powered-by'
app.disable('x-powered-by');

// Usar Helmet para más seguridad
app.use(helmet());

const trustedOrigins = [
  'http://localhost:3000', 
  'http://192.168.1.15:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (trustedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/evaluations', require('./routes/evaluationRoutes'));
app.use('/api/schools', require('./routes/schoolRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));