const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const multer = require("multer");

const app = express();

const tempDirectory = path.join(process.cwd(), "temp"); // путь к папке, куда multer складывает файлы при считывании на временное хранение
const uploadDirectory= path.join(process.cwd(), "upload");
// console.log(tempDirectory)
// console.log(uploadDirectory)

const uploadOptions = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDirectory);
    },
    filename: (req, res, cb) => {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 1200000
    }
});

const uploadMiddleware = multer({
    uploadOptions
});

const uploadFileNames = [
    {
        name: "photo",
        maxCount: 1
    }, 
    {
        name: "avatar",
        maxCount: 1
    }];

app.post("/profile", uploadMiddleware.fields(uploadFileNames), async(req, res, next)=> {
   const {path: tempName, originalname} = req.file;
    // console.log(tempName)
    // console.log(originalname)
    const newName = path.join(uploadDirectory, originalname);
    console.log(newName)
    try {
        await fs.rename(tempName, newName);
        res.json({
            status: "success",
            path: newName
        });
    }
    catch(error){
        // await fs.unlink(tempName);
        return next(error)
    }
});

app.get("/profile", (req, res, next)=> {

});

app.use((_, res, __)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Route not found"
    });
});

app.use((error, _, res, __)=>{
    res.status(500).json({
        status: "fail",
        code: 500,
        message: error.message
    })
});

const port = process.env.PORT || 3000;

app.listen(port);