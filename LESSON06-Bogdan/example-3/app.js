const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");

const {DB_HOST} = process.env;

const app = express();

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const {Schema, model} = require("mongoose");

const witcherSchema = new Schema({
    name: String,
    age: Number
}, {versionKey: false, timestamps: true});

const Witcher = new model("Witcher", witcherSchema);

// const newWitcher = {
//     name: "Геральт",
//     age: 100
// };

// Witcher.create(newWitcher)

// const nWitcher = new Witcher(newWitcher);

// nWitcher.save((error, data)=> {
//     console.log(error);
//     console.log(data)
// })

// nWitcher.save()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// async function addNewWitcher(){
//     try {
//         const data = await nWitcher.save();
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// addNewWitcher();

// async function findWitchers(query){
//     try{
//         const result = await Witcher.find({age: 99});
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// findWitchers()

// async function findWitcher(query){
//     try{
//         const result = await Witcher.findById("6054f6b07251ea154ce706db");
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// findWitcher()

// async function deleteWitcher(id){
//     try{
//         const result = await Witcher.findByIdAndDelete(id);
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// deleteWitcher("6054f6b07251ea154ce706db")

app.put("/witchers/:id", express.json(), async(req, res)=> {
    const {id} = req.params;
    const {body} = req;
    try{
        const result = await Witcher.findByIdAndUpdate(id,body, {new: true});
        res.json({
            status: "success",
            code: 200,
            data: result
        })
    }
    catch(error){
        console.log(error)
    }
});

app.listen(3000);

// async function updateWitcher(id){
//     try{
//         const result = await Witcher.findByIdAndUpdate(id, {age: 95}, {new: true});
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// updateWitcher("6054f7c51d80a4034057abc9")