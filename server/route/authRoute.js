const express = require('express');
const authController = require('../controller/authController');
const upload = require('../middleware/UploadMiddleware')

const router = express.Router();

router.post('/signUp', authController.signUp)
router.post('/createIntern', upload.fields([
    { name: 'nic_copy', maxCount: 1 },
    { name: 'cv', maxCount: 1 }
]), authController.createStudent)
router.post('/verifyEmail/:email', authController.verifyEmail)

module.exports = router;