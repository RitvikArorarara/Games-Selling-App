const express = require("express");
const userRouter = require("./Routes/user");
const gameRouter = require("./Routes/game");
const adminRouter = require("./Routes/admin")

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/game", gameRouter);

app.listen(3000);
