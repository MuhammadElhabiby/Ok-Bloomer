const express = require('express');
const boxesController = require('../controller/boxesController');

const router = express.Router();

router.get('/images', boxesController.getImages);

router.post('/addImageNote', boxesController.addImageNote);

module.exports = router;
