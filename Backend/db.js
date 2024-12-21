const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  // purchasedGames : [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref : 'Game'
  // }]
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const gameSchema = new Schema({
  gameId: Schema.Types.ObjectId,
  title: String,
  thumbnail: String,
  description: String,
  game_url: String,
  genre: String,
  platform: String,
  publisher: String,
  developer: String,
  release_date: Date,
  price: Number,
});
const purchaseSchema = new Schema({
  userId: ObjectId,
  gameId: ObjectId,
});

const userModel = mongoose.model("Users", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const gameModel = mongoose.model("Games", gameSchema);
const purchaseModel = mongoose.model("Purchases", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  gameModel,
  purchaseModel,
};
