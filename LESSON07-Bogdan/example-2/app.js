const express = require("express");
const flash = require("connect-flash");
const passport = require("passport");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
require('dotenv').config()

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(console.log);

const userRouter = require("./routes/index");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//{idr6yy: tyty}
app.use(
    session({
        secret: "secret-word",
        key: "session-key",
        cookie: {
            path: "/",
            httpOnly: true,
            maxAge: null
        },
        saveUninitialized: false,
        resave: false
    })
);
app.use(flash());

require("./config/config-passport");

app.use(passport.initialize());
app.use(passport.session());

app.use("/", userRouter);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

const port = process.env.PORT || "3000";

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
