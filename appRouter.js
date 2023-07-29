const express = require("express");
const router = express.Router();

//Import controllers, validators
const { getOrder, postOrder } = require("../controllers/orderController");
const{ orderValidators } = require("../middleware/validators")

//Build routes
router
    .get("/", getOrder)
    .post("/", orderValidators, postOrder);


// Export router
module .exports = router;
