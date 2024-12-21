const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, gameModel } = require("../db");
const gameRouter = Router();

gameRouter.post("/purchase", userMiddleware, async function (req, res) {
  //this endpoint is to buy a game
  const userId = req.userId;
  const gameId = req.body.gameId;

  await purchaseModel.create({
    userId,
    gameId,
  });
  //expecting to get payment but not including that functionality just add
  res.json({
    message: "You have successfully bought this game",
  });
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

module.exports = {
  gameRouter: gameRouter,
};
