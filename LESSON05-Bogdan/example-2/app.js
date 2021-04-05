const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const {MongoClient} = require("mongodb");

const app = express();
const dbURI = process.env.DB_HOST;

const port = process.env.PORT || 3000;

async function run (){
    const client = await new MongoClient(dbURI, { useUnifiedTopology: true }).connect();
    const result = await client.db("books_shop").collection("authors").find({vacancyName: 'Java Developer'}).toArray();
    const updateElement = await client.db("books_shop").collection("authors").find({name: "Author"}, {returnOriginal: false});
    console.log(updateElement)
}

run();




app.listen(port);