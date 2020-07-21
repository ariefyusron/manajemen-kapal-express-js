const express = require('express');

const router = express.Router();

const controller = require('../controllers/standarTarif');
const middleware = require('../middlewares/auth');

router.post('/', middleware.checkAuth, controller.createStandarTarif);
router.patch('/:id', middleware.checkAuth, controller.updateStandarTarif);
router.delete('/:id', middleware.checkAuth, controller.deleteStandarTarif);
router.get('/', middleware.checkAuth, controller.getStandarTarif);

module.exports = router;
