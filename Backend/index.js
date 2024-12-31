require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { userRouter } = require("./Routes/user");
const { gameRouter } = require("./Routes/game");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/game", gameRouter);


async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  if (require.main === module) {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
}
main();
module.exports = app;