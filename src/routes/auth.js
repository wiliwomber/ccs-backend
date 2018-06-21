"use strict";

const express        = require('express');
const router         = express.Router();

const middlewares    = require('../middlewares');
const AuthController = require('../controllers/auth');
const UserModel  = require('../models/user');


router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/me', middlewares.checkAuthentication , AuthController.me);
router.get('/logout', AuthController.logout);
router.put('/update', middlewares.checkAuthentication, AuthController.update);
router.put('/selectCourse', middlewares.checkAuthentication, AuthController.selectCourse);
router.put('/deSelectCourse', middlewares.checkAuthentication, AuthController.deSelectCourse);
router.get('/:id', AuthController.read);
router.post('/select', AuthController.Test);




module.exports = router;