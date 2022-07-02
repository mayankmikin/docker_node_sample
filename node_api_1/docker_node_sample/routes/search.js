const express = require('express');
const searchCtrl = require('../controllers/searchCtrl');
const router = express.Router();
module.exports = router;

//router.get('/movie/:title', searchCtrl.searchMovie);
router.get('/', searchCtrl.get);
