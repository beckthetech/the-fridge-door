const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../../controllers/api/groceries');

// GET /api/groceries
router.get('/', groceriesCtrl.index);
router.post('/', groceriesCtrl.create);

module.exports = router;