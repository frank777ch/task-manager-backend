const express = require('express');
const { createEvaluation, getEvaluations, getEvaluationById, updateEvaluation, deleteEvaluation } = require('../controllers/evaluationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/', createEvaluation);
router.get('/', getEvaluations);
router.get('/:evaluationId', getEvaluationById);
router.put('/:evaluationId', updateEvaluation);
router.delete('/:evaluationId', deleteEvaluation);

module.exports = router;