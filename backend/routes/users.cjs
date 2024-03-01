const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.cjs');
const ensureLoggedIn = require('../config/ensureLoggedIn.cjs')

router.get('/check-token', ensureLoggedIn, usersController.checkToken)
router.post('/', usersController.create);
router.post('/login', usersController.login)

module.exports = router;