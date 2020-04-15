const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
router.put('/:id', itemsCtrl.update);

module.exports = router;