const express = require('express');
const boxesRouter = require('./boxesRouter');
const plantsRouter = require('./plantsRouter');
const plantProfileRouter = require('./plantProfileRouter');
const usersRouter = require('./usersRouter');
const checkauth = require('../middleware/check-auth');
const demoRouter = require('./demoRouter');

const router = express.Router();

router.use('/boxes', checkauth, boxesRouter);
router.use('/plants', checkauth, plantsRouter);
router.use('/plantProfile', checkauth, plantProfileRouter);
router.use('/users', usersRouter);
router.use('/demo', demoRouter);

module.exports = router;
