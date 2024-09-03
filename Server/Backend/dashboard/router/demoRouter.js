const express = require('express');
const demoController = require('../controller/demoController');

const router = express.Router();

router.get('/generate', demoController.generate);

module.exports = router;
