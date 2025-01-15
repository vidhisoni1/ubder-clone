const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const { authCaptain } = require('../middlewares/auth.middlewares');



router.post('/register', captainController.registerCaptain)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
)


router.get('/profile', captainController.getCaptainProfile)

router.get('/logout', authCaptain, captainController.logoutCaptain)


module.exports = router;