import "./ProductList.css";
import { IProduct } from "./Product";
import React from "react";
type Props = {
  list: IProduct[];
  onDeleteHandle: (data: IProduct) => void;
  onEditHandle: (data: IProduct) => void;
};
export const ProductList = (props: Props) => {
  const { list, onDeleteHandle, onEditHandle } = props;
  return (
    <div>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Action</th>
        </tr>
        {list.map((product) => {
          return (
            <>
              <tr>
                <td>{`${product.productname}`}</td>
                <td>{`${product.quantity}`}</td>
                <td>{`${product.unit_price}`}</td>
                <td>
                  <input
                    type="button"
                    value="Edit"
                    className="editBtn"
                    onClick={() => onEditHandle(product)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    className="deleteBtn"
                    onClick={() => onDeleteHandle(product)}
                  />
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};
export default ProductList;
