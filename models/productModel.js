
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
    //   productname:{
    //     type: String,
    //     required: true,
    //     unique: true
    //   },
    //     quantity:{
    //         type: Number,
    //         required: true,
    //         unique: true
    //     },
    //     unit_price:{
    //         type: Number,
    //         required: true,
    //         unique: true
    //     }


    productname: String,
    quantity: Number,
    unit_price: Number
      
    },
    {
        timestamps: true
    }
)
const Product = mongoose.model('product', productSchema);

module.exports = Product;


 