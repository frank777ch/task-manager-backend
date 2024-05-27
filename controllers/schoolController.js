const School = require('../models/schoolModel');

exports.createSchool = async (req, res) => {
    const { name, address, city, state, zipCode, phone, email, website, principal } = req.body;
    try {
        const school = new School({ name, address, city, state, zipCode, phone, email, website, principal });
        await school.save();
        res.status(201).json(school);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getSchools = async (req, res) => {
    try {
        const schools = await School.find();
        res.status(200).json(schools);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getSchoolById = async (req, res) => {
    const { schoolId } = req.params;
    try {
        const school = await School.findById(schoolId);
        if (!school) {
            return res.status(404).json({ message: 'School not found' });
        }
        res.status(200).json(school);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateSchool = async (req, res) => {
    const { schoolId } = req.params;
    const { name, address, city, state, zipCode, phone, email, website, principal } = req.body;
    try {
        const school = await School.findByIdAndUpdate(schoolId, { name, address, city, state, zipCode, phone, email, website, principal }, { new: true });
        res.status(200).json(school);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteSchool = async (req, res) => {
    const { schoolId } = req.params;
    try {
        await School.findByIdAndDelete(schoolId);
        res.status(200).json({ message: 'School deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};