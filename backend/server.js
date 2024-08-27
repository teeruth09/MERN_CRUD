// const express = require('express')     ถ้าใส่ type module ที่ package.json ใช้ import ได้
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
// import Product from "./models/product..model.js";
// import mongoose from "mongoose";

import productRoutes  from "./routes/product.route.js";

const app = express();

app.use(express.json()); //allows us to accept json data in req.body

dotenv.config();

const PORT = process.env.PORT || 5000;

//use from routes
app.use("/api/products", productRoutes); //Set routes




app.listen(PORT, () => {
    console.log(`Server connected http:localhost:${PORT}`);
})

console.log(process.env.MONGO_URI)
//connect database
connectDB();
app.get("/" ,(req,res) =>{
    console.log(res);
    res.send("Hello");
})

