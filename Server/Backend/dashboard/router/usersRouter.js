const express = require('express');
const usersController = require('../controller/usersController');

const router = express.Router();

router.post('/register', usersController.register);
router.post('/authenticate', usersController.authenticate);

module.exports = router;
