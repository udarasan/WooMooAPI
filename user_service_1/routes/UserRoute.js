const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/reisterUser', UserController.registerUser);


module.exports = router;