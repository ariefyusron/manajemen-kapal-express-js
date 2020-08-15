const express = require('express');

const router = express.Router();

const controller = require('../controllers/history');
const middleware = require('../middlewares/auth');

router.post('/:idKapal', middleware.checkAuth, controller.saveRab);
router.get('/:idKapal', middleware.checkAuth, controller.getHistory);

module.exports = router;
