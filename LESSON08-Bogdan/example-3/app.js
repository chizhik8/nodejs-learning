const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const {userRouter} = require("./api");

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 3000;
const {DB_HOST} = process.env;

const connection = mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

connection
    .then(()=> {
        app.listen(PORT);
    })
    .catch(err => console.log(err));


