const { Router } = require("express");
const { userModel, purchaseModel, gameModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_USER_SECRET} = require("../config")
const {userMiddleware} = require("../middleware/user")

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  //add zod validation
  //Hash the password here as plaintext  cannot be stored in DB
  // need to put is in try catch
  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "Sign up Success",
  });
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  //todo : ideally password is hashed hence cannot compare the hashed password to the db password
  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_SECRET
    );
    res.json({
     token:token ,
    });
  }else{
    res.status(403).json({
      message:"Incorrect credentials"
    })
  }
 
});

userRouter.get("/purchases",userMiddleware,async function (req, res) { //all the games bought by a user

  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId
  })
  
  const gameData = await gameModel.findOne({
    _id :{ $in : purchases.map(x => x.gameId)}
  })

  res.json({
    purchases,
    gameData
  });
});

module.exports = {
  userRouter: userRouter,
};
