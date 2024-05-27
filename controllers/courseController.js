const Course = require('../models/courseModel');

exports.createCourse = async (req, res) => {
    const { name, description, startDate, endDate, instructor, credits, schedule, location } = req.body;
    try {
        const course = new Course({ name, description, startDate, endDate, instructor, credits, schedule, location });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCourseById = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const { name, description, startDate, endDate, instructor, credits, schedule, location } = req.body;
    try {
        const course = await Course.findByIdAndUpdate(courseId, { name, description, startDate, endDate, instructor, credits, schedule, location }, { new: true });
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        await Course.findByIdAndDelete(courseId);
        res.status(200).json({ message: 'Course deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};