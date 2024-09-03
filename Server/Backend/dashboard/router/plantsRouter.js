const express = require('express');
const plantsController = require('../controller/plantsController');

const router = express.Router();

router.get('/data', plantsController.getData);

module.exports = router;
