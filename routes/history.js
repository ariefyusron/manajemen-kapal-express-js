const express = require('express');

const router = express.Router();

const controller = require('../controllers/history');
const middleware = require('../middlewares/auth');

router.post('/:idKapal', middleware.checkAuth, controller.saveRab);
router.post('/is-edit/:idKapal', middleware.checkAuth, controller.isEdit);
router.get('/:idKapal', middleware.checkAuth, controller.getHistory);

router.get('/pekerjaan/:idHistory', middleware.checkAuth, controller.getPekerjaan);
router.get('/rab/:idHistory', middleware.checkAuth, controller.getRab);

module.exports = router;
