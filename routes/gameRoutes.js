const express = require('express');
const router = express.Router();
let games = require('../models/game');
const {getAllGames, getSingleGame} = require('../controllers/userControllers');

router.get('/all-games', getAllGames);
router.get('/single-game/:id', getSingleGame);
router.post('/create-game', (req, res) => {
    if (!req.body.name || !req.body.description || !req.body.yearReleased || !req.body.playTime) {
        return res
        .status(400)
        .json({confirmation: 'fail', message: 'All inputs must be filled in'});
    }
    let existingGame = games.filter((game) => game.name === req.body.email);
    if (existingGame.length) {
        return res
        .status(400)
        .send('This game already exists.')
    }

    let newGame = {};

    newGame.name = req.body.name;
    newGame.description = req.body.description;
    newGame.yearReleased = req.body.yearReleased;
    newGame.playTime = req.body.playTime;
    newGame.id = String(users.length + 1);

    games.push(newGame);
    
    return res.status(200).json({confirmation: 'Success', newGame});
})






module.exports = router;