const express = require('express');

const router = express.Router();

const controller = require('../controllers/pelayananUmum');
const middleware = require('../middlewares/auth');

router.post('/:idKapal', middleware.checkAuth, controller.createPelayananUmum);
router.patch('/:idKapal/:id', middleware.checkAuth, controller.updatePelayananUmum);
router.delete('/:idKapal/:id', middleware.checkAuth, controller.deletePelayananUmum);
router.get('/:idKapal', middleware.checkAuth, controller.getPelayananUmum);
router.get('/:idKapal/:id', middleware.checkAuth, controller.getByIdPelayananUmum);

module.exports = router;
