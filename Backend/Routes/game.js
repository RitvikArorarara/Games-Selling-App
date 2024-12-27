const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { userModel, gameModel } = require("../db");
const gameRouter = Router();

gameRouter.post("/purchase", userMiddleware, async function (req, res) {
  //this endpoint is to buy a game
  const userId = req.userId;
  const gameId = req.body.gameId;

  try {
    const user = await userModel.findById(userId);
    const game = await gameModel.findById(gameId);

    if (!user || !game) {
      return res.status(404).json({ message: "User or game not found" });
    }

    if (user.purchasedGames.includes(gameId)) {
      return res.status(400).json({ message: "Game already purchased" });
    }

    user.purchasedGames.push(gameId);
    await user.save();

    res.json({
      message: "You have successfully bought this game",
      game: game,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error purchasing game", error: error.message });
  }
});
gameRouter.get("/preview", async function (req, res) {
  //all the current games in the db
  try {
    const games = await gameModel.find({});
    res.json({
      games,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching games" });
  }
});

gameRouter.get("/purchased",userMiddleware, async function (req, res) {
  const userId = req.userId;

  try {
    const user = await userModel.findById(userId).populate('purchasedGames');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      purchasedGames: user.purchasedGames
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching purchased games", error: error.message });
  }
});

module.exports = {
  gameRouter: gameRouter,
};
