const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

router.get('/:id', UserController.get);
router.get('/', UserController.list);
router.post('/', UserController.post);

module.exports = router;
