const bcrypt = require("bcrypt");
const { Router, response } = require("express");
const { userModel, purchaseModel, gameModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");
const { z } = require("zod");

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
//added zod validation
//add more password validation with special character and number cap and small
  const requiredBody = z.object({
    email: z.string().min(6).max(100).email(),
    password: z.string().min(6).max(25),
    firstName: z.string(),
    lastName: z.string(),
  });

  const parsedDataWithSuccess = requiredBody.safeParse(req.body);
  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parsedDataWithSuccess.error,
    });
    return;
  }

  const { email, password, firstName, lastName } = req.body;
 
  //Hash the password here as plaintext cannot be stored in DB
  let errorThown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (e) {
    res.json({
      message: "user already exists",
    });
    errorThown = true;
  }
  if (!errorThown) {
    res.json({
      message: "Sign up Success",
    });
  }
});

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  //todo : ideally password is hashed hence cannot compare the hashed password to the db password
  const user = await userModel.findOne({
    email: email,
  });

  if (!user) {
    res.status(403).json({
      message: "User does not exists please sign up",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});
 
module.exports = {
  userRouter: userRouter,
};
