const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    const { title, description, status, startDate, endDate, priority, category, tags, assignedTo, course } = req.body;
    try {
        const task = new Task({
            title,
            description,
            status,
            startDate,
            endDate,
            priority,
            category,
            tags,
            assignedTo,
            course,
            user: req.user.userId,
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.userId }).populate('course');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateTask = async (req, res) => {
    const { taskId } = req.params;
    const { title, description, status, startDate, endDate, priority, category, tags, assignedTo, course } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(taskId, { title, description, status, startDate, endDate, priority, category, tags, assignedTo, course }, { new: true });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        await Task.findByIdAndDelete(taskId);
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};