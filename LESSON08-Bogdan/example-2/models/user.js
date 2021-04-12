const {model} = require("mongoose");

const {userSchema} = require("./schemas");

const User = new model("user", userSchema);

module.exports = User;