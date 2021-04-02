const express = require("express");

const bodyJSON = express.json();
const productsRouter = express.Router();

const productList = require("./productList");

productsRouter.get("/", (req, res)=> {
    const {name} = req.query;
    if(name) {
        const filterProducts = productList.filter(item => item.name.includes(name));
        res.send(filterProducts);
    }
    else {
        res.send(productList);
    }
});

productsRouter.get("/:id", (req, res)=> {
    const {id} = req.params;
    const product = productList.find(item => item._id === id);
    if(product){
        res.send(product)
    }
    else {
        res.statusCode = 204;
        res.send({
            status: "Error"
        })
    }
});

productsRouter.post("/", bodyJSON, (req, res)=> {
    const newProduct = {
        ...req.body,
        _id: v4()
    };
    productList.push(newProduct);
    const latElement = productList[products.length - 1];
    res.send(latElement);
});

productsRouter.put("/:id", bodyJSON, (req, res)=> {
    const {body} = req;
    const {id} = req.params
    const idx = productList.findIndex(item => item._id === id);
    if(idx !== -1) {
        productList[idx] = {...body, _id: id};
        res.send(productList[idx]);
    }
});

productsRouter.delete("/:id", (req, res)=> {
    const {id} = req.params;
    const idx = productList.findIndex(item => item._id === id);
    if(idx !== -1){
        const deleteProduct = productList[idx];
        productList.splice(idx, 1);
        res.send(deleteProduct)
    }
})

module.exports = productsRouter;