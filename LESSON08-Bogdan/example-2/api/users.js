const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const dotenv = require("dotenv");

const {User} = require("../models");

const {SECRET_KEY} = process.env;

const router = express.Router();

const login = (req, res, next)=> {
    passport.authenticate("jwt", {session: false}, (err, user)=> {
        if(!user || err){
            return  res.status(401).json({
                status: "error",
                code: 401,
                message: "Not enough status"
            });
        }
        req.user = user;
        next();
    })
}

router.post("/login", async (req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({ email });

    if(!user || !User.validPassword(password)){
        return res.status(400).json({
            status: "error",
            code: 400,
            message: "Wrong email or password",
            data: null
        });
    }

    const payload = {id: user.id};

    const token = jwt.sign(payload, SECRET_KEY, {expireIn: "1h"});

    res.json({
        status: "success",
        code: 200,
        data: {
            token
        }
    });
})

router.post("/register", async(req, res)=> {
    const {userName, email, password} = req.body;
    const user = await User.findOne({email, userName});
    if(user){
        return res.status(409).json({
            status: "error",
            code: 409,
            mesage: "Such userName or email are present",
            data: "Confilt userName or email"
        })
    }

    try {
        const newUser = new User({userName, email});
        newUser.setPassword(password);
        const result = await newUser.save();
        res.json({
            status: "success",
            code: 200,
            data: {
                user: result
            }
        });
    }
    catch (error){

    }
})

router.get("/profile", login, async(req, res)=> {
    const {email, userName, password} = req.user;
    res.json({
        data: {
            profileInfo: {
                email,
                userName,
                password
            }
        }
    })
})
// "/products"
// "/products?status=new"
// "/products-shot-info"
/*
{
    name: "",
    price: "",
    img: ""
}
*/
router.get("/cart", login, async(req, res)=> {
    const {id} = req.user;
    try {
        // const cart = await Cart.findOne({userId: id});
    }
    catch(error) {

    }
})

module.exports = router;