const express = require('express');

const router = express.Router();

const controller = require('../controllers/kontruksiBadanKapal');
const middleware = require('../middlewares/auth');

router.post('/', middleware.checkAuth, controller.createKontruksiBadanKapal);
router.patch('/:id', middleware.checkAuth, controller.updateKontruksiBadanKapal);
router.delete('/:id', middleware.checkAuth, controller.deleteKontruksiBadanKapal);
router.get('/', middleware.checkAuth, controller.getKontruksiBadanKapal);
router.get('/:id', middleware.checkAuth, controller.getByIdKontruksiBadanKapal);

module.exports = router;
