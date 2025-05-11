const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "staff", enum: ['intern', 'staff', 'security', 'admin', 'director'] },
    isEmailVerify: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false }
}, {timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;