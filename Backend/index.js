const express = require("express");
const userRouter = require("./Routes/user");
const gameRouter = require("./Routes/game");

const app = express();

app.use("/user", userRouter);
app.use("/games", gameRouter);

app.listen(3000);
