import { useEffect, useState } from "react";
import "./Home.css";
import { ProductList } from "./ProductList";
import { PageEnum, iProduct } from "./Product";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import React from "react";

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://rogelio:rogelio@cluster0.skl1wfg.mongodb.net/crud";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected!!");
  } catch (error) {
    console.log(error);
  }
}
connect();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

const Home = () => {
  const [product, setProduct] = useState([] as iProduct[]);
  const [showPage, setShowPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as iProduct);

  const productSchema = new mongoose.Schema({
    id: new Date().toJSON().toString(),
    productname: String,
    quantity: Number,
    unit_price: Number,
    require: true,
  });

  useEffect(() => {
    const listInString = window.localStorage.getItem("Products");
    if (listInString) {
      _setProduct(JSON.parse(listInString));
    }
  }, []);
  const showListPage = () => {
    setShowPage(PageEnum.list);
  };

  const _setProduct = (list: iProduct[]) => {
    setProduct(list);
    // window.localStorage.setItem("Products", JSON.stringify(list));
    const collection = new mongoose.model("Products", productSchema);
    collection.insertMany([list]);
  };

  const HandleAdd = () => {
    setShowPage(PageEnum.add);
  };

  const addProductHandle = (data: iProduct) => {
    _setProduct([...product, data]);
  };

  const deleteProduct = (data: iProduct) => {
    const indexToDelete = product.indexOf(data);
    const tempList = [...product];
    tempList.splice(indexToDelete, 1);
    _setProduct(tempList);
  };

  const editProduct = (data: iProduct) => {
    setShowPage(PageEnum.edit);
    setDataToEdit(data);
  };
  const updateProduct = (data: iProduct) => {
    const filteredData = product.filter((x) => x.id === data.id)[0];
    const indexOfRecord = product.indexOf(filteredData);
    const tempData = [...product];
    tempData[indexOfRecord] = data;
    _setProduct(tempData);
  };

  const logOut = () => {
    window.location.href = "./";
  };
  return (
    <>
      <article className="article-header">
        <header>
          <h1>PRODUCTS</h1>
          <button onClick={logOut} className="logout">
            Log out
          </button>
        </header>
      </article>
      <section className="section-content">
        {showPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Product"
              onClick={HandleAdd}
              className="addProductBtn"
            />
            <ProductList
              list={product}
              onDeleteHandle={deleteProduct}
              onEditHandle={editProduct}
            />
          </>
        )}
        {showPage === PageEnum.add && (
          <AddProduct
            backBtn={showListPage}
            onSubmitHandle={addProductHandle}
          />
        )}
        {showPage === PageEnum.edit && (
          <EditProduct
            data={dataToEdit}
            backBtn={showListPage}
            onUpdateClick={updateProduct}
          />
        )}
      </section>
    </>
  );
};

export default Home;
