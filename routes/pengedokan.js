const express = require('express');

const router = express.Router();

const controller = require('../controllers/pengedokan');
const middleware = require('../middlewares/auth');

router.post('/:idKapal', middleware.checkAuth, controller.createPengedokan);
router.patch('/:idKapal/:id', middleware.checkAuth, controller.updatePengedokan);
router.delete('/:idKapal/:id', middleware.checkAuth, controller.deletePengedokan);
router.get('/:idKapal', middleware.checkAuth, controller.getPengedokan);
router.get('/:idKapal/:id', middleware.checkAuth, controller.getByIdPengedokan);

module.exports = router;
