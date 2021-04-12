// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0Ijo0NTQyMzI0MzR9.u20qA-CCcqcHRZi8lWNPeAgBWmXViD1idnVkahJCQiw

const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

const {SECRET_KEY} = process.env;

const payload = {
    id: "455d22fgg", user: {
        name: "Alex",
        lastName: "Benedict"
    }
}

const token = jwt.sign(payload, SECRET_KEY);

// console.log(token)

const decodeToken = jwt.decode(token);

console.log(decodeToken)

const wrongVerifyToken = jwt.verify(`${token}3`, SECRET_KEY)
const verifyToken = jwt.verify(token, SECRET_KEY)

console.log(verifyToken)
console.log(wrongVerifyToken)
