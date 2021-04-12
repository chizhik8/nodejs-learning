const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, "У пользователя должно быть имя!"]
    },
    lastName: {
        type: String,
        require: [true, "У пользователя должна быть фамилия!"]
    }
});

const User = new model("User", userSchema);

module.exports = User;