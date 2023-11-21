const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://rogelio:rogelio@cluster0.skl1wfg.mongodb.net/crud";

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected!!")
    }catch (error){
        console.log(error);
    }
}
connect();

app.listen(3000, () => {
    console.log("Server started on port 3000")
})

const productSchema = new mongoose.Schema({
    id: new Date().toJSON().toString(),
    productname:String,
    quantity:Number,
    unit_price:Number,
    require: true,
})

const data={
    product:"Product2",
    quantity:2,
    unit_price:2
}


const collection = new mongoose.model('produtcs', productSchema)

collection.insertOne([data])

