const nodemailer = require('nodemailer');
const User = require('../model/User');
const bcrypt = require('bcrypt');
const UserActivity = require('../model/UserActivity');
const validator = require('validator')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const InternInfo = require('../model/InternInfor');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const authController = {
    signUp: async(req, res) => {
        try{
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

            if(checkuser){
                return res.json({ Error: "User Already Exists"})
            }

            const hashpass = await bcrypt.hash(password, 10)

            const newUser = new User({
                username: username,
                email: email,
                password: hashpass
            })

            const resultnewUser = await newUser.save()

            if(resultnewUser){
                return res.json({ Status: "Success", Message: "User Regisatation Successfull"})
            }
            else{
                return res.json({ Error: "Internal Server Error..."})
            }
        }
        catch(err){
            console.log(err)
        }
    },

    createStudent: async(req, res) => {
        try{
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

            if(checkintern){
                return res.json({ Error: "Intern/Training already exists in the system" })
            }

            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email },
                ]
            })

            if(checkuser){
                return res.json({ Error: "User Already Exists"})
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

            if(resultnewIntern){
                const hashpass = await bcrypt.hash(password, 10)

                const newInternUser = new User({
                    email: email,
                    username: username,
                    password: hashpass,
                    role: 'intern'
                })

                const resultnewInternUser = await newInternUser.save()

                if(resultnewInternUser){
                    return res.json({ Status: "Success", Message: "Intern Account Created Successful now Verify your email"})
                }
                else{
                    return res.json({ Error: "Internal Server Error..."})
                }
            }
            else{
                return res.json({ Error: "Internal Server Error while creating new Intern Account"})
            }


        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;