const Evaluation = require('../models/evaluationModel');

exports.createEvaluation = async (req, res) => {
    const { taskEvaluated, evaluationDate, rating, comments, recommendations, evaluationStatus, attachments } = req.body;
    try {
        const evaluation = new Evaluation({
            evaluator: req.user.userId,
            taskEvaluated,
            evaluationDate,
            rating,
            comments,
            recommendations,
            evaluationStatus,
            attachments
        });
        await evaluation.save();
        res.status(201).json(evaluation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getEvaluations = async (req, res) => {
    try {
      const evaluations = await Evaluation.find().populate('taskEvaluated evaluator');
      const sanitizedEvaluations = evaluations.map(evaluation => ({
        ...evaluation._doc,
        taskEvaluated: evaluation.taskEvaluated || { title: 'No Title' },
        evaluator: evaluation.evaluator || { firstName: 'Unknown', lastName: 'Evaluator' }
      }));
      res.status(200).json(sanitizedEvaluations);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.getEvaluationById = async (req, res) => {
    const { evaluationId } = req.params;
    try {
        const evaluation = await Evaluation.findById(evaluationId).populate('taskEvaluated evaluator');
        if (!evaluation) {
            return res.status(404).json({ message: 'Evaluation not found' });
        }
        res.status(200).json(evaluation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateEvaluation = async (req, res) => {
    const { evaluationId } = req.params;
    const { taskEvaluated, evaluationDate, rating, comments, recommendations, evaluationStatus, attachments } = req.body;
    try {
        const evaluation = await Evaluation.findByIdAndUpdate(evaluationId, { taskEvaluated, evaluationDate, rating, comments, recommendations, evaluationStatus, attachments }, { new: true });
        res.status(200).json(evaluation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteEvaluation = async (req, res) => {
    const { evaluationId } = req.params;
    try {
        await Evaluation.findByIdAndDelete(evaluationId);
        res.status(200).json({ message: 'Evaluation deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};