require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { userRouter } = require("./Routes/user");
const { gameRouter } = require("./Routes/game");


const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/game", gameRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3001);
  console.log("listening on port 3001");
}
main();
