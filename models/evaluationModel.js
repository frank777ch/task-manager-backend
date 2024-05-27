const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
    evaluator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    taskEvaluated: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    evaluationDate: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comments: {
        type: String,
    },
    recommendations: {
        type: String,
    },
    evaluationStatus: {
        type: String,
        enum: ['Pending', 'Completed'],
        default: 'Pending'
    },
    attachments: {
        type: [String], // URLs or paths to attachment files
    }
}, {
    timestamps: true
});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);

module.exports = Evaluation;