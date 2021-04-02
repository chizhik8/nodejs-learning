const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const axios = require("axios");

const app = express();

const port = process.env.PORT || 3000;

// console.log(process.env.API_SECRET_KEY);
// console.log(process.env.NODE_ENV);
// console.log(process.env.WEATHER_API_KEY);

const {weatherURL, weatherAPI} = require("./config");

app.get("/weather", async (req, res)=> {
    const {lat, lon} = req.query;
    if(!lat || !lon) {
        res.send({
            status: "Error",
            message: "lat or lon is not defined"
        })
    }
    try {

        const {data} = await axios.get(`${weatherURL}?lat=${lat}&lon=${lon}&appid=${weatherAPI}`)
        res.send({
            status: "Success",
            result: data
        });
    }
    catch (err){
        res.send({
            status: "Error",
            message: err.message
        })
    }

});

app.listen(port);