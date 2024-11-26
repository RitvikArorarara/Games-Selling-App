const { Router } = require("express");

const gameRouter = Router();

gameRouter.post("/game/purchase", function (req, res) {
  //expecting to get payment but not including that functionality just add
  res.json({
    message: "sign up endpoint",
  });
});
gameRouter.post("/games", function (req, res) {
  res.json({
    message: "sign up endpoint",
  });
});

module.exports = {
  gameRouter: gameRouter,
};
