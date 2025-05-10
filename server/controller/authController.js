const nodemailer = require('nodemailer');
const User = require('../model/User');
const bcrypt = require('bcrypt');
const UserActivity = require('../model/UserActivity');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const InternInfo = require('../model/InternInfor');
const UserOTP = require('../model/UserOTP')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendVerificationOTP = async (email, username, userType = 'user') => {
    const generateOTP = (length = 8) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let otp = '';
        for (let i = 0; i < length; i++) {
            otp += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return otp;
    };

    const otp = generateOTP();
    const hashotp = await bcrypt.hash(otp, 10);
    const newOTP = new UserOTP({ email, otp: hashotp });
    const resultsaveotp = await newOTP.save();

    if (!resultsaveotp) return { success: false };

    let introLine = '';
    let waitingInfo = '';

    if (userType === 'intern') {
        introLine = `Thank you for registering with the University of Peradeniya Intern Management System.`;
        waitingInfo = `Your account has been successfully placed on the Intern waiting list.`;
    } else if (userType === 'staff') {
        introLine = `Thank you for registering with the University of Peradeniya Staff Management System.`;
        waitingInfo = `Your account is pending verification by university administration.`;
    } else {
        introLine = `Thank you for registering with the University of Peradeniya System.`;
        waitingInfo = `Your account is pending verification.`;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification Required',
        text: `Dear ${username},

            ${introLine}

            ${waitingInfo} To complete your registration, please verify your email address using the One-Time Password (OTP) provided below:

            🔐 OTP Code: ${otp}

            This OTP is valid for 5 minutes. Please do not share this code with anyone.

            Once your email is verified and your registration is approved by the university administration, you will receive a confirmation email with further instructions.

            If you did not request this registration, please ignore this email.

            Best regards,  
            University of Peradeniya  
            ${userType.charAt(0).toUpperCase() + userType.slice(1)} Management System`
    };

    const mailsent = await transporter.sendMail(mailOptions);
    return mailsent ? { success: true } : { success: false };
};


const authController = {
    signUp: async (req, res) => {
        try {
            const {
                username,
                email,
                password,
            } = req.body

            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email },
                ]
            })

            if (checkuser) {
                return res.json({ Error: "User Already Exists" })
            }

            const hashpass = await bcrypt.hash(password, 10)

            const newUser = new User({
                username: username,
                email: email,
                password: hashpass
            })

            const resultnewUser = await newUser.save()

            if (resultnewUser) {
                const otpResult = await sendVerificationOTP(email, username, 'staff');
                if (otpResult.success) {
                    return res.json({ Status: "Success", Message: "Now You are in Waiting List Wait for Approve by Admin" })
                } else {
                    return res.json({ Error: "Internal Server Error while Sending Email" })
                }
            }
            else {
                return res.json({ Error: "Internal Server Error..." })
            }
        }
        catch (err) {
            console.log(err)
        }
    },

    createStudent: async (req, res) => {
        try {
            const {
                email,
                username,
                password,
                mobile,
                address,
                nic,
                dob,
                github,
                linkedin,
                campus,
                course,
            } = req.body

            const nic_copy = req.files.nic_copy[0].path;
            const cv = req.files.cv[0].path;

            const checkintern = await InternInfo.findOne({ email: email })

            if (checkintern) {
                return res.json({ Error: "Intern/Training already exists in the system" })
            }

            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email },
                ]
            })

            if (checkuser) {
                return res.json({ Error: "User Already Exists" })
            }

            const newIntern = new InternInfo({
                email: email,
                mobile: mobile,
                address: address,
                nic: nic,
                nic_copy: nic_copy,
                cv: cv,
                dob: dob,
                github: github,
                linkedin: linkedin,
                camups: campus,
                course: course,
            })

            const resultnewIntern = await newIntern.save()

            if (resultnewIntern) {
                const hashpass = await bcrypt.hash(password, 10)

                const newInternUser = new User({
                    email: email,
                    username: username,
                    password: hashpass,
                    role: 'intern'
                })

                const resultnewInternUser = await newInternUser.save()

                if (resultnewInternUser) {
                    const otpResult = await sendVerificationOTP(email, username, 'intern');
                    if (otpResult.success) {
                        return res.json({ Status: "Success", Message: "Now You are in Waiting List Wait for Approve by Admin" })
                    } else {
                        return res.json({ Error: "Internal Server Error while Sending Email" })
                    }
                }
                else {
                    return res.json({ Error: "Internal Server Error..." })
                }
            }
            else {
                return res.json({ Error: "Internal Server Error while creating new Intern Account" })
            }

        }
        catch (err) {
            console.log(err)
        }
    },

    verifyEmail: async (req, res) => {
        try {
            const {
                otp
            } = req.body

            const email = req.params.email

            const checkotpuser = await UserOTP.findOne({ email: email })

            if (!checkotpuser) {
                return res.json({ Error: "No Recodes found by given Email Address" })
            }

            const checkotp = await bcrypt.compare(otp, checkotpuser.otp)

            if (!checkotp) {
                return res.json({ Error: "OTP Not Match" })
            }

            const checkuser = await User.findOne({ email: email })

            if (checkuser.role === 'intern') {
                const verifyotpintern = await InternInfo.findOneAndUpdate(
                    { email: email },
                    { $set: { isEmailVerfy: true } },
                    { new: true }
                )

                if (verifyotpintern) {
                    const verifyinternUser = await User.findOneAndUpdate(
                        { email: email },
                        { $set: { isEmailVerify: true } },
                        { new: true }
                    )

                    if (verifyinternUser) {
                        const deleteotp = await UserOTP.findOneAndDelete({ email: email })

                        if (deleteotp) {
                            return res.json({ Status: "Success", Message: "Email Verification Success, Wait of Approve by Admin" })
                        }
                    }
                }
            }
            else if (checkuser.role === 'staff') {
                const verifyinternUser = await User.findOneAndUpdate(
                    { email: email },
                    { $set: { isEmailVerify: true } },
                    { new: true }
                )

                if (verifyinternUser) {
                    const deleteotp = await UserOTP.findOneAndDelete({ email: email })

                    if (deleteotp) {
                        return res.json({ Status: "Success", Message: "Email Verification Success, Wait of Approve by Admin" })
                    }
                }
            }

        }
        catch (err) {
            console.log(err)
        }
    },

    signin: async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body

            const checkuser = await User.findOne({ email: email })

            if (!checkuser) {
                return res.json({ Error: "User Cannot find by Given Eamil Address" })
            }

            const checkpass = await bcrypt.compare(password, checkuser.password)

            if (!checkpass) {
                return res.json({ Error: "Password Not Match " })
            }

            if (checkuser.isActive === false) {
                return res.json({ Error: "This Account is Not Active" })
            }

            const token = jwt.sign({ id: checkuser._id, role: checkuser.role, user: checkuser }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.json({ Status: "Success", Token: token })
        }
        catch (err) {
            console.log(err)
        }
    },

    forgetpass: async (req, res) => {
        try {
            const email = req.body

            const checkuser = await User.findOne({ email: email })

            if (checkuser) {
                return res.json({ Error: "No User found by given Email Address" })
            }

            const PassResutOTPGen = (length = 8) => {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
                let otp = '';
                for (let i = 0; i < length; i++) {
                    otp += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return otp;
            };

            const passotp = PassResutOTPGen();
            const hashotp = await bcrypt.hash(passotp, 10);
            const newOTP = new UserOTP({ email, otp: hashotp });
            const resultsaveotppass = await newOTP.save();

            if (resultsaveotppass) {
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: 'Password Reset',
                    text: `Dear ${email},

                        We received a request to reset the password for your account on the University of Peradeniya Intern Management System.

                        🔐 OTP Code for Password Reset: ${passotp}

                        This OTP is valid for 5 minutes. Please do not share this code with anyone.

                        If you did not request a password reset, please ignore this email. Your account will remain secure.

                        Best regards,  
                        University of Peradeniya  
                        Intern Management System`
                };

                const mailsent = await transporter.sendMail(mailOptions);

                if (mailsent) {
                    return res.json({ Status: "Success", Message: "OTP (One TIme Password) is send to your emal address" })
                }
                else {
                    return res.json({ Error: "Error While Sending Email" })
                }

            }
            else {
                return res.json({ Error: "Internal Server Error" })
            }

        }
        catch (err) {
            console.log(err)
        }
    },

    verifypassotp: async (req, res) => {
        try {
            const {
                email,
                otp
            } = req.body

            const checkuser = await User.findOne({ email: email })

            if (!checkuser) {
                return res.json({ Error: "No User found by Given Email" })
            }

            const checkotp = await UserOTP.findOne({ email: email })

            if (!checkotp) {
                return res.json({ Error: "The OTP not Match.." })
            }

            const successdeleteotp = await UserOTP.findOneAndDelete({ email: email })

            if (successdeleteotp) {
                const token = jwt.sign(
                    { id: checkuser._id, role: checkuser.role, user: checkuser },
                    process.env.JWT_SECRET,
                    { expiresIn: '10m' }
                );
                return res.json({ Status: "Success", Message: "OTP Verify Success", token: token })
            }
            else {
                return res.json({ Error: "Internal Server Error While Verify OTP" })
            }
        }
        catch (err) {
            console.log(err)
        }
    },

    updatepass: async (req, res) => {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) {
                return res.json({ Error: "Access Denied. No Token Provided." });
            }

            let decoded;
            try {
                decoded = jwt.verify(token, process.env.JWT_SECRET);
            } catch (err) {
                return res.json({ Error: "Invalid or Expired Token." });
            }

            const {
                newpass,
            } = req.body

            const checkuser = await User.findOne({ email: email })

            const hashnewpass = await bcrypt.hash(newpass, 10)

            if (hashnewpass) {
                const updatenewpass = await User.findOneAndUpdate(
                    { email: email },
                    { $set: { password: hashnewpass } },
                    { new: true }
                )

                if (updatenewpass) {
                    return res.json({ Status: "Success", Message: "Password Update Successfull" })
                }
                else {
                    return res.json({ Error: "Internal Server Error while Updating the Password" })
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }

};

module.exports = authController;
