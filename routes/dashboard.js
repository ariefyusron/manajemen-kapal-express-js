const express = require('express');

const router = express.Router();

const controller = require('../controllers/dashboard');
const middleware = require('../middlewares/auth');

router.get('/', middleware.checkAuth, controller.get);

module.exports = router;
