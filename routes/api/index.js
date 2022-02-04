const router = require('express').Router();
const travellerRoutes = require('./travellersRoute');
const locationRoutes = require('./locationsRoute');
const tripRoutes = require('./tripsRoute');

router.use('/traveller', travellerRoutes);
router.use('/location', locationRoutes);
router.use('/trip', tripRoutes);

module.exports = router;
