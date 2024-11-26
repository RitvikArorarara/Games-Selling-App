const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "sign up endpoint",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "sign in endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "user bought these games endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
