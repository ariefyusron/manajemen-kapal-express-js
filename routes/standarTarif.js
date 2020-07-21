const express = require('express');

const router = express.Router();

const controller = require('../controllers/standarTarif');
const middleware = require('../middlewares/auth');

router.post('/', [middleware.checkAuth, middleware.checkAdmin], controller.createStandarTarif);
router.patch('/:id', [middleware.checkAuth, middleware.checkAdmin], controller.updateStandarTarif);
router.delete('/:id', [middleware.checkAuth, middleware.checkAdmin], controller.deleteStandarTarif);
router.get('/', middleware.checkAuth, controller.getStandarTarif);

module.exports = router;
