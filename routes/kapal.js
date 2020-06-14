const express = require('express');
const router = express.Router();

const controller = require('../controllers/kapal');

/* GET all kapal. */
router.get('/', controller.getKapal);

module.exports = router;
