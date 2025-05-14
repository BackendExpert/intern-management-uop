const mongoose = require('mongoose');

const InternInfoSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    nic: { type: String, required: true, unique: true },
    nic_copy: { type: String, required: true },
    cv: { type: String, required: true },
    dob: { type: Date, required: true },
    github: { type: String, required: true, unique: true },
    linkedin: { type: String, required: true, unique: true },
    camups: { type: String, required: true },
    course: { type: String, required: true },
    isEmailVerfy: { type: Boolean, required: true, default: false },
    isApprove: { type: Boolean, required: true, default: false },
    status: { type: String, default: "pending", enum: ['accept', 'reject', 'pending'] },
}, { timestamps: true });

const InternInfo = mongoose.model('InternInfo', InternInfoSchema);

module.exports = InternInfo;