const { Router } = require("express");

const gameRouter = Router();

gameRouter.post("/purchase", function (req, res) {
  //expecting to get payment but not including that functionality just add
  res.json({
    message: "sign up endpoint",
  });
});
gameRouter.post("/preview", function (req, res) {
  res.json({
    message: "all the games endpoint",
  });
});

module.exports = {
  gameRouter: gameRouter,
};
