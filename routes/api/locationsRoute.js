const router = require('express').Router();
const { Traveller, Location, Trip } = require('../../models');

//GET ALL locations
router.get('/', async (req, res) => {
  try {
    const locationsData = await Location.findAll({
      include: [{ model: Traveller, through: Trip, as: 'travellers'}],
    });
    res.status(200).json(locationsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single location by ID
router.get('/:id', async (req, res) => {
  try {
    const locationsData = await Location.findByPk(req.params.id, {
      include: [{ model: Traveller, through: Trip, as: 'travellers' }],
    });

    if (!locationsData) {
      res.status(404).json({ message: 'No location found with that id!' });
      return;
    }

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a card
router.post('/', async (req, res) => {
  try {
    const locationData = await LibraryCard.create({
      reader_id: req.body.reader_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a card
router.delete('/:id', async (req, res) => {
  try {
    const libraryCardData = await LibraryCard.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!libraryCardData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
