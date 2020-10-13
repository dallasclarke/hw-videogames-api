const express = require('express');
const router = express.Router();
let games = require('../models/game');
const {getAllGames, getSingleGame, createGame} = require('../controllers/userControllers');

router.get('/all-games', getAllGames);
router.get('/single-game/:id', getSingleGame);
router.post('/create-game', createGame);






module.exports = router;