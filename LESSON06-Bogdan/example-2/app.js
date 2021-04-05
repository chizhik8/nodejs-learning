const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const {DB_HOST} = process.env;

const validRules = require("./validationRules")

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const {Schema, model} = mongoose;

// const userSchema = new Schema({
//     name: {
//         type: String,
//         required: [true, "У ведьмака должно быть имя!"],
//         minlength: 2,
//         maxlength: 20,
//         // match
//     },
//     email: {
//         type: String,
//         unique: true
//     },
//     age: {
//         type: Number,
//         required: true,
//         min: 1,
//         max: 1000
//     },
//     friends: [{
//         type: String,
//         enum: ["Лютик", "Йеннифер", "Трисс", "Весемир"]
//     }],
//     horse: {
//         name: {
//             type: String,
//             default: "Плотва"
//         },
//         age: {
//             type: Number,
//             required: true,
//             min: 1,
//             max: 10
//         }
//     }
// });
/*
String
Number
Boolean
Date
ObjectId
Arrray
Mixed
Buffer
*/

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "У ведьмака должно быть имя!"],
        minlength: 2,
        maxlength: 20,
        match: /[A-z]{3,}/g
    },
    email: {
        type: String,
        match: validRules.email,
        unique: true
    },
    age: {
        type: Number,
        require: [true, "У ведьмака должен быть возраст!"],
        validate: {
            validator: function(value){
                return value > 0;
            },
            message: props => `${props.age} Возраст ведьмака не должен быть отрицательным!`
        }
    }
});

const User = new model("User", userSchema);

const newUser = {
    name: "Herald",
    email: "kaer-Morhen"
};

User.create(newUser);

// const app = express();

// app.get("/validRules", (req, res)=> {
//     res.json(validRules)
// })