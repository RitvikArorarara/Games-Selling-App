import MONGO_URL from '.env'
const mongoose = require("mongoose");
mongoose.connect(MONGO_URL)
const Schema = mongoose.Schema;
const ObjectId = mongoose.type.ObjectId;

const userSchema = new Schema({
    email : {type:String , unique:true},
    password : String,
    firstName : String,
    lastName : String
})

const adminSchema = new Schema({
    email : {type:String , unique:true},
    password : String,
    firstName : String,
    lastName : String
})

const gameSchema = new Schema({
    title : String,
    thumbnail : String,
    description : String,
    price : Number,
    publisher: String,
    id:ObjectId
})

const userModel = mongoose.model("Users", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const gameModel = mongoose.model("Games", gameSchema);

module.exports=(
    {
        userModel,
        adminModel,
        gameModel
    }
)