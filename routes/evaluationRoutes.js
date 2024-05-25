const express = require('express');
const { createEvaluation, getEvaluations, updateEvaluation, deleteEvaluation } = require('../controllers/evaluationController');
const router = express.Router();

router.post('/', createEvaluation);
router.get('/', getEvaluations);
router.put('/:evaluationId', updateEvaluation);
router.delete('/:evaluationId', deleteEvaluation);

module.exports = router;