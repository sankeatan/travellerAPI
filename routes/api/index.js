const router = require('express').Router();
const readerRoutes = require('./travellersRoute');
const libraryCardRoutes = require('./locationsRoute');

router.use('/readers', readerRoutes);
router.use('/cards', libraryCardRoutes);

module.exports = router;
