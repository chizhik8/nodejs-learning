const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors);

app.use(express.json());

require("./configs/config-passport");

const {userRouter} = require("./api");

app.use("/auth", userRouter);

const PORT = process.env.PORT || 3000;

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT)
})

