const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
    evaluator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    taskEvaluated: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
    },
    evaluationDate: {
        type: Date,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
    recommendations: {
        type: String,
    },
    evaluationStatus: {
        type: String,
        enum: ['Pending', 'Complete'],
        default: 'Pending',
    },
    attachments: [{
        type: String,
    }],
}, {
    timestamps: true,
});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);

module.exports = Evaluation;