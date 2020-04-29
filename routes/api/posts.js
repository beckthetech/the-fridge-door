const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// GET /api/posts
router.get('/', postsCtrl.index);

// auth protected routes
router.use(require('../../config/auth'));
// process token for routes below
router.get('/:id', checkAuth, postsCtrl.show);
router.post('/', checkAuth, postsCtrl.create);
router.put('/:id', checkAuth, postsCtrl.update);
router.delete('/:id', checkAuth, postsCtrl.delete);

// helper functions
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;