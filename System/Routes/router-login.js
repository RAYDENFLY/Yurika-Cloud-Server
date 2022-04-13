const router = require('express').Router();
const loginController = require('../Controllers').login;
const verifyUser = require('../Config/verify');

router.get('/', verifyUser.isLogout, loginController.login);
router.get('/logout', loginController.logout);

router.post('/auth', loginController.loginAuth);

module.exports = router;