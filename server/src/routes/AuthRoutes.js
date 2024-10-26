// Server/Src/Routes/AuthRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/AuthModel');
const authMiddleware = require('../Middleware/AuthMiddleware');

// Register Route
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log('Registration attempt:', { username, email });

        // Check if user exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        // Generate token
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '24h' });

        console.log('User registered successfully:', user.email);

        res.status(201).json({
            message: 'User created successfully',
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: error.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt:', email);

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '24h' });

        console.log('User logged in successfully:', user.email);

        res.json({
            message: 'Login successful',
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: error.message });
    }
});

// Protected route example
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;