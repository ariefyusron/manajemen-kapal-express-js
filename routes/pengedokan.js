const express = require('express');

const router = express.Router();

const controller = require('../controllers/pengedokan');
const middleware = require('../middlewares/auth');

router.post('/', middleware.checkAuth, controller.createPengedokan);
router.patch('/:id', middleware.checkAuth, controller.updatePengedokan);
router.delete('/:id', middleware.checkAuth, controller.deletePengedokan);
router.get('/', middleware.checkAuth, controller.getPengedokan);
router.get('/:id', middleware.checkAuth, controller.getByIdPengedokan);

module.exports = router;
