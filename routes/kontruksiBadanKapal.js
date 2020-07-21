const express = require('express');

const router = express.Router();

const controller = require('../controllers/kontruksiBadanKapal');
const middleware = require('../middlewares/auth');

router.post('/:idKapal', middleware.checkAuth, controller.createKontruksiBadanKapal);
router.patch('/:idKapal/:id', middleware.checkAuth, controller.updateKontruksiBadanKapal);
router.delete('/:idKapal/:id', middleware.checkAuth, controller.deleteKontruksiBadanKapal);
router.get('/:idKapal', middleware.checkAuth, controller.getKontruksiBadanKapal);
router.get('/:idKapal/:id', middleware.checkAuth, controller.getByIdKontruksiBadanKapal);

module.exports = router;
