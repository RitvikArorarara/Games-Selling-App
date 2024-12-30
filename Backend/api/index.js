// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const { userRouter } = require("../Routes/user");
// const { gameRouter } = require("../Routes/game");


// const app = express();
// app.use(express.json());
// app.use(cors());


// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/game", gameRouter);

// async function main() {
//   await mongoose.connect(process.env.MONGO_URL);
//   app.listen(3001);
//   console.log("listening on port 3001");
// }
// main();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import your routes
const gameRouter = require('../src/routes/game');
const userRouter = require('../src/routes/user');

app.use(express.json());
app.use('/api/v1/game', gameRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;