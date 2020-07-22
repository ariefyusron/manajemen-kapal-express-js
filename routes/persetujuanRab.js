const express = require('express');

const router = express.Router();

const controller = require('../controllers/persetujuanRab');
const middleware = require('../middlewares/auth');

router.patch('/:idKapal', middleware.checkAuth, controller.update);
router.get('/:idKapal', middleware.checkAuth, controller.get);

module.exports = router;
