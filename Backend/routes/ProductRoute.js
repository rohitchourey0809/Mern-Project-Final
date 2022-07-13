const {
  getAllProducts,
  createProduct,
  UpdateProduct,
  DeleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const express = require("express");
const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

router
  .route("/product/:id")
  .put(UpdateProduct)
  .delete(DeleteProduct)
  .get(getProductDetails);

module.exports = router;
