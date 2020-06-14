const express = require('express');

const router = express.Router();

const controller = require('../controllers/kapal');
const middleware = require('../middlewares/auth');

router.post('/', middleware.checkAuth, controller.createKapal);
router.patch('/:id', middleware.checkAuth, controller.updateKapal);
router.delete('/:id', middleware.checkAuth, controller.deleteKapal);
router.get('/', middleware.checkAuth, controller.getKapal);
router.get('/:id', middleware.checkAuth, controller.getByIdKapal);

module.exports = router;
