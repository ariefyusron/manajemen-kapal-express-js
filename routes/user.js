const express = require('express');

const router = express.Router();

const controller = require('../controllers/user');
const middleware = require('../middlewares/auth');

router.get('/', [middleware.checkAuth, middleware.checkAdmin], controller.getUser);
router.post('/register', middleware.register, controller.createUser);
router.post('/login', controller.login);
router.delete('/:id', [middleware.checkAuth, middleware.checkAdmin], controller.deleteUser);

module.exports = router;
