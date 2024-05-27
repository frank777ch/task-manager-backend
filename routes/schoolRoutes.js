const express = require('express');
const { createSchool, getSchools, getSchoolById, updateSchool, deleteSchool } = require('../controllers/schoolController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Aplica el middleware de autenticación solo a las rutas que requieren autenticación
router.post('/', authMiddleware, createSchool);
router.get('/', getSchools); // No requiere autenticación para obtener las escuelas
router.get('/:schoolId', authMiddleware, getSchoolById);
router.put('/:schoolId', authMiddleware, updateSchool);
router.delete('/:schoolId', authMiddleware, deleteSchool);

module.exports = router;