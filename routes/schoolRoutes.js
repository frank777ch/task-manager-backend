const express = require('express');
const { createSchool, getSchools, updateSchool, deleteSchool } = require('../controllers/schoolController');
const router = express.Router();

router.post('/', createSchool);
router.get('/', getSchools);
router.put('/:schoolId', updateSchool);
router.delete('/:schoolId', deleteSchool);

module.exports = router;