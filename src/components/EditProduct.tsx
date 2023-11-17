import { iProduct } from "./Product";
import "./AddProduct.css";
import { useState } from "react";
import React from "react";

type Props = {
  data: iProduct;
  backBtn: () => void;
  onUpdateClick: (data: iProduct) => void;
};

const EditProduct = (props: Props) => {
  const { data, backBtn, onUpdateClick } = props;

  const [addproduct, setAddProduct] = useState(data.productname);
  const [addquantity, setAddQuantity] = useState(data.quantity);
  const [addprice, setAddPrice] = useState(data.unit_price);

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
    const updatedData: iProduct = {
      id: data.id,
      productname: addproduct,
      quantity: addquantity,
      unit_price: addprice,
    };
    onUpdateClick(updatedData);
    backBtn();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleBtnSubmit}>
        <div>
          <h3>ADD PRODUCT</h3>
        </div>
        <div>
          <label>Product :</label>
          <input type="text" value={addproduct} onChange={handleProduct} />
        </div>
        <div>
          <label>Quantity :</label>
          <input type="number" value={addquantity} onChange={handleQuantity} />
        </div>
        <div>
          <label>Unit Price :</label>
          <input type="number" value={addprice} onChange={handlePrice} />
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
            value="Update Product"
            className="add"
            onClick={handleBtnSubmit}
          />
        </div>
      </form>
    </div>
  );
};
export default EditProduct;
