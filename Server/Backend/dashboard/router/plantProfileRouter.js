const express = require('express');
const plantProfileController = require('../controller/plantProfileController');

const router = express.Router();

router.get('/getPresets', plantProfileController.getPresets);

router.post('/updatePreset', plantProfileController.updatePreset);

module.exports = router;
