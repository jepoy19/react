import "./ProductList.css"
import { iProducts } from "./Product"

type Props = {
    list : iProducts[];
    onDeleteHandle : (data: iProducts) => void
    onEdithandle: (data: iProducts) => void
};
export const ProductList = (props: Props) => {
    const {list, onDeleteHandle} = props;
    return(
        <div>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Action</th>
                </tr>
                
                    {list.map((product) => {
                        return(
                            <>
                            <tr key={product.id}>
                            <td>{`${product.productname}`}</td>
                            <td>{`${product.quantity}`}</td>
                            <td>{`${product.unit_price}`}</td>
                            <td>
                                <input type="button" value="Edit" className="editBtn"  onClick={() => onEditHandle(product)}/>
                                <input type="button" value="Delete" className="deleteBtn" onClick={() => onDeleteHandle(product)}/>
                            </td>
                            </tr>
                            </>
                        );
                    })}
            </table>
        </div>
    )
}
export default ProductList;