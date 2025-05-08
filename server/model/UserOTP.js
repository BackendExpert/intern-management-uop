const mongoose = require('mongoose');

const UserOTPSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true, unique: true },
    expireAt: {
        type: Date,
        default: Date.now,
        expires: 600 
    }
}, { timestamps: true });

const UserOTP = mongoose.model('UserOTP', UserOTPSchema);

module.exports = UserOTP;