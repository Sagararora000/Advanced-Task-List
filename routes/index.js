const express = require('express');

const router = express.Router();
const startController = require('../controllers/start_controller')

console.log("Router loaded");
router.get('/',startController.start);
router.post('/createList',startController.fillInfo);
module.exports = router;