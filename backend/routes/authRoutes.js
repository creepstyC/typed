const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const asyncHandler = require('express-async-handler');

const router = express.Router();

// @desc    Registrar un nuevo usuario
// @route   POST /api/auth/register
router.post(
    '/register',
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error('Email already registered');
        }

        // Crear un nuevo usuario
        const user = await User.create({ email, password });

        if (user) {
            res.status(201).json({
                _id: user._id,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    })
);

// @desc    Iniciar sesión
// @route   POST /api/auth/login
router.post(
    '/login',
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    })
);

// Generar token JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

module.exports = router;
