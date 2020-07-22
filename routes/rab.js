const express = require('express');

const router = express.Router();

const controller = require('../controllers/rab');
const middleware = require('../middlewares/auth');

router.post('/:idKapal', middleware.checkAuth, controller.createRab);
router.patch('/:idKapal/:id', middleware.checkAuth, controller.updateRab);
router.delete('/:idKapal/:id', middleware.checkAuth, controller.deleteRab);
router.get('/:idKapal', middleware.checkAuth, controller.getRab);
router.get('/:idKapal/:id', middleware.checkAuth, controller.getByIdRab);

router.post('/:idKapal/pekerjaan', middleware.checkAuth, controller.createPekerjaan);
router.patch('/:idKapal/pekerjaan/:id', middleware.checkAuth, controller.updatePekerjaan);
router.delete('/:idKapal/pekerjaan/:id', middleware.checkAuth, controller.deletePekerjaan);
router.get('/:idKapal/pekerjaan', middleware.checkAuth, controller.getPekerjaan);

module.exports = router;
