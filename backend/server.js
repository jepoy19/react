const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('../models/productModel'); 

const app = express();
app.use(express.json());
app.use(cors());


app.post('/addProduct', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});


app.get('/products', async(req, res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products)
        console.log("%c Line:28 🥓 products", "color:#e41a6a", products);

    } catch (error) {
        res.status(500).json({message: error.mesaage})
    }
})

app.put('/products/:id', async (req, res) => {

    console.log("%c Line:36 🌮", "color:#3f7cff");
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        console.log("%c Line:38 🥚 product", "color:#b03734", product);

        if(!product){
            return res.status(404).json({message: `cannot find any product with this ID ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        console.log("%c Line:45 🥒 error", "color:#e41a6a", error);
        res.status(500).json({message: error.message})

    }
})

app.delete('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:`cannot find a product with this ID ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose
  .connect('mongodb+srv://rogelio:rogelio@cluster0.skl1wfg.mongodb.net/crud')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('API is running on port 3000');
    });
  })
  .catch((error) => {
    console.error(error);
  });