import { useEffect, useState } from "react";
import "./Home.css";
import { ProductList } from "./ProductList";
import { PageEnum, IProduct } from "./Product";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import React from "react";
import axios from "axios";

const Home = () => {
  const [products, setProduct] = useState([]); //list of products for displaying
  const [showPage, setShowPage] = useState(PageEnum.list);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [dataToEdit, setDataToEdit] = useState<IProduct | null>(null);

  // useEffect(() => {
  //   setInterval(() => {
  //     setShouldFetch(true);
  //   }, 1000);
  // }, []);

  const getData: any = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      console.log("%c Line:26 🍆 did fetch!", "color:#ea7e5c", response.data);
      setProduct(response.data);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      //if true, runs FETCH function
      getData();
      setShouldFetch(false); //since getData was already called, no need to fetch again ( set to FALSE)
    }
  }, [shouldFetch]); //listens to changes in shouldFetch useState

  const showListPage = () => {
    setShowPage(PageEnum.list);
  };

  const HandleAdd = () => {
    setShowPage(PageEnum.add);
  };

  const addProductHandler = async (data: IProduct) => {
    try {
      console.log("%c Line:36 🍰", "color:#33a5ff", data);
      const response = await axios.post(
        "http://localhost:3000/addProduct",
        data
      );
      console.log(response);

      setShouldFetch(true);
      getData();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const deleteProduct = async (data: IProduct) => {
    try {
      //@ts-ignore
      const { _id } = data; // ID of the user to delete

      const deleteById = await axios.delete(
        "http://localhost:3000/products/" + _id
      );
      console.log("%c Line:74 🍞", "color:#4fff4B", deleteById);
    } catch (error) {
      console.error("Error deleting user:", error);
    }

    getData();
  };

  const updateProduct = async (data: IProduct) => {
    setShowPage(PageEnum.edit);
    setDataToEdit(data);

    try {
      //@ts-ignore
      const { _id } = data;
      console.log("%c Line:103 🍯 data", "color:#33a5ff", data);
      console.log("%c Line:103 🍉 _id", "color:#ffdd4d", _id);

      const updateToDb = await axios.put(
        "http://localhost:3000/products/" + _id
      );
      console.log("%c Line:94 🥝", "color:#b03734", updateToDb);
    } catch (error) {
      console.log("%c Line:96 🍋 ", "color:#7f2b82", error);
    }
    getData();
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
              list={products}
              onDeleteHandle={deleteProduct}
              onEditHandle={updateProduct}
            />
          </>
        )}
        {showPage === PageEnum.add && (
          <AddProduct
            backBtn={showListPage}
            onSubmitHandler={addProductHandler}
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
