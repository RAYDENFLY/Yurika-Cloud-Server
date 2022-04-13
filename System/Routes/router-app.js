const router = require('express').Router();
const homeController = require('../Controllers').home;
const profileController = require('../Controllers').profile;
const verifyUser = require('../Config/verify');

router.get('/', verifyUser.isLogin, homeController.home);
router.get('/profile', verifyUser.isLogin, profileController.profile);

module.exports = router;