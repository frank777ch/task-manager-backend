const express = require('express');
const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/', createCourse);
router.get('/', getCourses);
router.get('/:courseId', getCourseById); // Nueva ruta para obtener un curso específico
router.put('/:courseId', updateCourse);
router.delete('/:courseId', deleteCourse);

module.exports = router;