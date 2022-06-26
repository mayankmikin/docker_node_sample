const express = require('express');
const searchRoutes = require('./search');
const router = express.Router();

router.use('/search', searchRoutes);

router.use('/', searchRoutes);

module.exports = router;