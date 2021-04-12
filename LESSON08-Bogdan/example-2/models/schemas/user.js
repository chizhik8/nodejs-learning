const {Schema} = require("mongoose");
const bcrypt = require("bcryptjs");
// userTypes
const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "Имя - обязательное поле"],
        minlength: 2
    },
    email: {
        type: String,
        required: [true, "Email - обязательно поле"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Пароль - обязательное поле"]
    },
    // userType: {
    //     type: String,
    //     id: 
    // }
});

userSchema.methods.setPassword = (password)=> {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
}

userSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
}

module.exports = userSchema;