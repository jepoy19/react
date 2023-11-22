
const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
      productname:{
        type: String,
        required: [true, "Please enter a product name"]
      },
        quantity:{
            type: Number,
            required: true,
            default: 0
        },
        unit_price:{
            type: Number,
            required: true,

        }
      
    },
    {
        timestamps: true
    }
)
const Product = mongoose.model('product', productSchema);
module.exports = Product;


