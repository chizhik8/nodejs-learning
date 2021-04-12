const express = require("express");

const router = express.Router();

const {ctrlUser} = require("../controllers");


router.get("/", ctrlUser.get);

router.get("/:id", ctrlUser.getById);

router.post("/", ctrlUser.add);

router.put("/:id", ctrlUser.update);

router.delete("/:id", ctrlUser.remove);


module.exports = router;