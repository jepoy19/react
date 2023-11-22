import { useEffect, useState } from "react";
import "./Home.css";
import { ProductList } from "./ProductList";
import { PageEnum, iProduct } from "./Product";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import React from "react";

const Home = () => {
  const [product, setProduct] = useState([] as iProduct[]);
  const [showPage, setShowPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as iProduct);

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
    window.localStorage.setItem("Products", JSON.stringify(list));
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
