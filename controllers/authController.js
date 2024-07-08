const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de usuario
exports.register = async (req, res) => {
    const { firstName, lastName, email, password, birthDate, phone, address, gender, school } = req.body;
    try {
        const user = new User({
            firstName: firstName.toString(),
            lastName: lastName.toString(),
            email: email.toString(),
            password: password.toString(),
            birthDate: new Date(birthDate),
            phone: phone.toString(),
            address: address.toString(),
            gender: gender.toString(),
            school: school.toString()
        });
        await user.save();
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login de usuario
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email.toString() }).populate('school');
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password.toString(), user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};