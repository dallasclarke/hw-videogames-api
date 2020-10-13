let games = require('../models/game');

module.exports = {
    getAllGames: (req, res) => {
        return res
        .status(200)
        .json({confirmation: 'success', games})
    },
    getSingleGame: (req, res) => {
        let foundGame = games.filter((game) => {
            if (game.id === req.params.id) {
                return res.json({confirmation: 'success', game})
            }
        })
        if (!foundGame.length) {
            return res
            .status(400)
            .json({confirmation: 'fail', message: 'Game does not exist!'})
        }
    },
};