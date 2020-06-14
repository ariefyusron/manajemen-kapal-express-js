const express = require('express');

const router = express.Router();

const controller = require('../controllers/user');
const middleware = require('../middlewares/auth');

/* GET all kapal. */
router.post('/register', middleware.register, controller.createUser);

module.exports = router;
