const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "sign up endpoint",
  });
});

userRouter.post("/user/signin", function (req, res) {
  res.json({
    message: "sign in endpoint",
  });
});

userRouter.get("/user/purchases", function (req, res) {
  res.json({
    message: "user bought games endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
