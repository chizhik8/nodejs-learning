const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: String,
    age: Number
});

const User = new model("User", userSchema);

const newUser = {
    name: "Baffalo Bill",
    age: 42
};

User.create(newUser);