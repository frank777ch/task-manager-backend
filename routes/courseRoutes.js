const express = require('express');
const { createCourse, getCourses, updateCourse, deleteCourse } = require('../controllers/courseController');
const router = express.Router();

router.post('/', createCourse);
router.get('/', getCourses);
router.put('/:courseId', updateCourse);
router.delete('/:courseId', deleteCourse);

module.exports = router;