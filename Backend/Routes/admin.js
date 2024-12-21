const bcrypt = require("bcrypt");
const { Router } = require("express");
const adminRouter = Router();
const { adminModel, gameModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const {z} = require("zod")
//bcrypt for hashing password
//zod for input validation
//jsonwebtoken for jwt

adminRouter.post("/signup", async function (req, res) {
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
  //add zod validation
  //Hash the password here as plaintext  cannot be stored in DB
  let errorThown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await adminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (e) {
    res.json({
      message: "Admin already exists",
    });
  }
  if (!errorThown) {
    res.json({
      message: "Sign up Success",
    });
  }
});

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  //todo : ideally password is hashed hence cannot compare the hashed password to the db password
  const admin = await adminModel.findOne({
    email: email,
  });
  if (!admin) {
    res.status(403).json({
      message: "This admin does not exists",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, admin.password);

  if (passwordMatch) {
    jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_SECRET
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

adminRouter.post("/game", adminMiddleware, async function (req, res) {
  const adminId = req.adminId;

  const { title, thumbnail, description, price, publisher } = req.body;

  const game = await gameModel.create({
    title: title,
    thumbnail: thumbnail,
    description: description,
    price: price,
    publisher: publisher,
    creatorid: adminId,
  });

  res.json({
    message: "Added a new game into DB",
    gameId: game._id,
  });
});

adminRouter.put("/game", adminMiddleware, async function (req, res) {
  const adminId = req.adminId;

  const { title, thumbnail, description, price, publisher, gameId } = req.body;

  const game = await gameModel.updateOne(
    {
      _id: gameId,
      creatorid: adminId,
    },
    {
      title: title,
      thumbnail: thumbnail,
      description: description,
      price: price,
      publisher: publisher,
    }
  );
  res.json({
    message: "Game contents updated",
    gameId: game._id,
  });
});

adminRouter.get("/game/all", adminMiddleware, async function (req, res) {
  const adminId = req.userId;
  const games = await gameModel.find({
    creatorid: adminId,
  });
  res.json({
    message: "All the games",
    games,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
