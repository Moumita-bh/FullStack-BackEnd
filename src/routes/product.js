const express = require("express");
const { getProducts, createProduct } = require("../controllers/product");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, createProduct);

module.exports = router;
