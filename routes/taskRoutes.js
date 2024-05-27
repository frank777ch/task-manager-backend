const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:taskId', getTaskById); 
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

module.exports = router;