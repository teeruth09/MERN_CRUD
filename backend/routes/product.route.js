import express from "express";

import { getProducts,createProduct,updateProduct,deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

//get
router.get("/", getProducts);
//post
router.post("/", createProduct);
//put
router.put("/:id", updateProduct);
//delete
router.delete("/:id", deleteProduct);


export default router;