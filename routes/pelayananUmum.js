const express = require('express');

const router = express.Router();

const controller = require('../controllers/pelayananUmum');
const middleware = require('../middlewares/auth');

router.post('/', middleware.checkAuth, controller.createPelayananUmum);
router.patch('/:id', middleware.checkAuth, controller.updatePelayananUmum);
router.delete('/:id', middleware.checkAuth, controller.deletePelayananUmum);
router.get('/', middleware.checkAuth, controller.getPelayananUmum);
router.get('/:id', middleware.checkAuth, controller.getByIdPelayananUmum);

module.exports = router;
