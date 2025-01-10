const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const userController = require("../controllers/user.controller");
const { authUser } = require('../middlewares/auth.middlewares');

router.post('/register', [
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage
    ('first name must be three character long'),
    body('password').isLength({min: 6}).withMessage('password must be 6 character long')
],
 userController.registerUser 
)


router.post('/login', [
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min: 6}).withMessage('password must be 6 character long')
],
 userController.loginUser 
)
 router.get('/profile',authUser,userController.getUserProfile);
 router.get('/logout', authUser, userController.loginUser )
 
module.exports = router;