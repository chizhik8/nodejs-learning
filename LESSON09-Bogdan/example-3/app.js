const express = require("express");
const cloudinary = require("cloudinary").v2;

const app = express();

cloudinary.config({
    cloud_name: "dpzx4xaru",
    api_key: "213435563597343",
    api_secret: "6IN-b3EakpEsdchv4GU4gK7BXW0"
});

app.post("/profile", async (req, res, next)=> {
    const data = {
        photo: req.body.photo
    };
    try {
        const result = await cloudinary.uploader.upload(data.photo);
        res.json({
            status: "success",
            path: result
        })
    }
    catch(error){
        
    }
})