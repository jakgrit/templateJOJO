//Require
const express = require('express');
const router = express.Router();

//Controller
const LoginController = require('../controllers/loginController');

//Router
router.route('/check').post(LoginController.login);
router.route('/add').post(LoginController.addUser);

//Exports
module.exports = router;