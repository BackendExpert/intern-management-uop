const express = require('express');

const { authMiddleware } = require('../middleware/AuthMiddleware')
const { accessMiddleware } = require('../middleware/AccessMiddleware');
const ApplicationController = require('../controller/ApplicationController');


const router = express.Router();

router.get('/allapplications', authMiddleware, accessMiddleware(['security', 'admin', 'director']), ApplicationController.getallapplications)

module.exports = router;