const express = require('express');
const router = express.Router();
let games = require('../models/game');
const {getAllGames, getSingleGame} = require('../controllers/userControllers');

router.get('/all-games', getAllGames);
router.get('/single-game/:id', getSingleGame);






module.exports = router;