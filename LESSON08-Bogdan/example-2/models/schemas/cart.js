const {Schema} = require("mongoose");

const cartSchema = Schema({
    products: [ObjectId],
    userId: ObjectId
});