const express = require('express');
const router = express.Router();
const controller = require('../controllers/messagesController');

router.post('/', controller.create);
router.get('/', controller.list); // Ruta protegida si lo deseas

module.exports = router;
