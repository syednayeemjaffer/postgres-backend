const express = require('express');
const { register, login, getAllUser } = require('../controller/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users',getAllUser)
module.exports = router;
