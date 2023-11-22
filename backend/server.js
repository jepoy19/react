const { error } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const Product = require('../models/productModel')
const app = express()

app.use(express.json())

app.get('/products', async(req, res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({message: error.mesaage})
    }
})

app.get('/products/:id', async(req, res ) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.mesaage})
    }
})

app.post('/addProduct', async(req, res) => {
   try {
    const products = await Product.create(req.body)
    res.status(200).json(products);
    console.log(req.body)

   } catch (error) {
    console.log(error.mesaage)
    res.status(500).json({message: error.message})
   }
})


mongoose.
connect('mongodb+srv://rogelio:rogelio@cluster0.skl1wfg.mongodb.net/crud')
.then(() => {
    console.log('Connected to mongodb')
    app.listen(3000, () => {
        console.log('Api is running on port 3000')
    })
}).catch((error) => {
    console.log(error)
})