const express = require('express');
const router = express.Router();
const Card = require('../models/Card');
const validateCard = require('../middleware/validateCard');

// Create a card
router.post('/', validateCard, async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newCard = new Card({ title, description });
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    next(error);
  }
});

// Get all cards
router.get('/', async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    next(error);
  }
});

// Get a specific card by title
router.get('/:title', async (req, res, next) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    next(error);
  }
});

module.exports = router;