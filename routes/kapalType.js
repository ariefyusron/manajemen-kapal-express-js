const express = require('express');

const router = express.Router();

const controller = require('../controllers/kapalType');
const middleware = require('../middlewares/auth');

router.post('/', [middleware.checkAuth, middleware.checkAdmin], controller.createType);
router.patch('/:id', [middleware.checkAuth, middleware.checkAdmin], controller.updateType);
router.delete('/:id', [middleware.checkAuth, middleware.checkAdmin], controller.deleteType);
router.get('/', [middleware.checkAuth, middleware.checkAdmin], controller.getType);
router.get('/:id', [middleware.checkAuth, middleware.checkAdmin], controller.getByIdType);

module.exports = router;
