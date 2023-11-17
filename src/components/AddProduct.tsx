import "./AddProduct.css";
import { useState } from "react";
import { iProduct } from "./Product";
import React from "react";
type Props = {
  backBtn: () => void;
  onSubmitHandle: (data: iProduct) => void;
};
const AddProduct = (props: Props) => {
  const [addproduct, setAddProduct] = useState("");
  const [addquantity, setAddQuantity] = useState("");
  const [addprice, setAddPrice] = useState("");

  const { backBtn, onSubmitHandle } = props;

  const handleProduct = (e: any) => {
    setAddProduct(e.target.value);
  };

  const handleQuantity = (e: any) => {
    setAddQuantity(e.target.value);
  };

  const handlePrice = (e: any) => {
    setAddPrice(e.target.value);
  };

  const handleBtnSubmit = (e: any) => {
    e.preventDefault();
    const data: iProduct = {
      id: new Date().toJSON().toString(),
      productname: addproduct,
      quantity: addquantity,
      unit_price: addprice,
    };
    onSubmitHandle(data);
    backBtn();
  };
  return (
    <div className="form-container">
      <form onSubmit={handleBtnSubmit} className="AddInputs">
        <div>
          <h3>ADD PRODUCT</h3>
        </div>
        <div>
          <label>Product :</label>
          <input
            className="product"
            type="text"
            value={addproduct}
            onChange={handleProduct}
            required
          />
        </div>
        <div>
          <label>Quantity :</label>
          <input
            type="number"
            value={addquantity}
            onChange={handleQuantity}
            required
          />
        </div>
        <div>
          <label>Unit Price :</label>
          <input
            type="number"
            value={addprice}
            onChange={handlePrice}
            required
          />
        </div>
        <div>
          <input
            type="button"
            value="Back"
            className="back"
            onClick={backBtn}
          />
          <input
            type="button"
            value="Add Product"
            className="add"
            onClick={handleBtnSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
