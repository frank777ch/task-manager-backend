const Evaluation = require('../models/evaluationModel');

exports.createEvaluation = async (req, res) => {
    const { evaluator, taskEvaluated, evaluationDate, rating, comments, recommendations, evaluationStatus, attachments } = req.body;
    try {
        const evaluation = new Evaluation({
            evaluator,
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
        const evaluations = await Evaluation.find();
        res.status(200).json(evaluations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateEvaluation = async (req, res) => {
    const { evaluationId } = req.params;
    const { evaluator, taskEvaluated, evaluationDate, rating, comments, recommendations, evaluationStatus, attachments } = req.body;
    try {
        const evaluation = await Evaluation.findByIdAndUpdate(evaluationId, { evaluator, taskEvaluated, evaluationDate, rating, comments, recommendations, evaluationStatus, attachments }, { new: true });
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