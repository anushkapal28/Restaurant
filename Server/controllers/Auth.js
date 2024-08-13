const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: 'All fields are required',
            });
        }

        const user = await User.findOne({ email }).populate('additionalDetails');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User is not existed, signup first',
            });
        }
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '2h',
            });
            user.token = token;
            user.password = undefined;

          
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            res.cookie('token', token, options).status(200).json({
                success: true,
                token,
                user,
                message: 'Logged In successfully',
            });
        } else {
            return res.status(401).json({
                success: false,
                message: 'Password is incorrect',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Login failure, try again',
        });
    }
};


//SIGNUP

exports.signup = async (req, res) => {
    try {
     
        const { name, email, password } = req.body;


        if (!name || !email || !password ) {
            return res.status(403).json({
                success: false,
                message: 'All fields are required',
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }

        const recentOtp = await OTP.findOne({ email }).sort({ createdAt: -1 }).exec();
        if (!recentOtp) {
            return res.status(400).json({
                success: false,
                message: 'OTP not found',
            });
        }
        console.log(`Received OTP: ${otp}`);
        console.log(`Stored OTP (hashed): ${recentOtp.otp}`);

        const isMatch = await bcrypt.compare(otp, recentOtp.otp);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Creating user with details:', {
            name,
            email,
            hashedPassword,
        });
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        await OTP.deleteOne({ email });
        console.log('User registered successfully:', user);

        return res.status(200).json({
            success: true,
            message: 'User registered successfully',
            user,
        });
    } catch (error) {
        console.error('Error during sign up:', error);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered. Please try again',
        });
    }
};

