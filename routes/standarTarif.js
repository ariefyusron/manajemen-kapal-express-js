const express = require('express');

const router = express.Router();

const controller = require('../controllers/standarTarif');
const middleware = require('../middlewares/auth');

router.post('/', [middleware.checkAuth, middleware.checkAdmin], controller.createStandarTarif);
router.patch('/:id', [middleware.checkAuth, middleware.checkAdmin], controller.updateStandarTarif);
router.delete('/:id', [middleware.checkAuth, middleware.checkAdmin], controller.deleteStandarTarif);
router.get('/', middleware.checkAuth, controller.getStandarTarif);

router.post('/pekerjaan', [middleware.checkAuth, middleware.checkAdmin], controller.createPekerjaan);
router.patch('/pekerjaan/:id', [middleware.checkAuth, middleware.checkAdmin], controller.updatePekerjaan);
router.delete('/pekerjaan/:id', [middleware.checkAuth, middleware.checkAdmin], controller.deletePekerjaan);
router.get('/pekerjaan', middleware.checkAuth, controller.getPekerjaan);

module.exports = router;
