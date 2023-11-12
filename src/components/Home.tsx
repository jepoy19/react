import {useState} from "react"
import "./Home.css"
import { ProductList } from "./ProductList"
import { PageEnum, iProducts } from "./Product"
import { sampleProducts } from "./Product"
import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"
const Home = () => {
    const [product, setProduct] = useState(sampleProducts as iProducts[]);
    const [showPage, setShowPage] = useState(PageEnum.list)
    const showListPage = () => {
        setShowPage(PageEnum.list)
    }

    const HandleAdd = () => {
        setShowPage(PageEnum.add)
    }

    const addProductHandle = (data: iProducts) => {
        setProduct([...product, data])
    }

    const deleteProduct = (data: iProducts) => {
        const indexToDelete = product.indexOf(data);
        const tempList = [...product]
        tempList.splice(indexToDelete, 1)
        setProduct(tempList);
    }

    const editProduct = (data: iProducts) => {

    }

   return(
    <>
    <article className="article-header">
        <header>
            <h1>PRODUCTS</h1>
        </header>
    </article>
    <section className="section-content">
    {showPage === PageEnum.list &&(
        <>
        <input type="button" value="Add Product" onClick={HandleAdd} className="addProductBtn"/>
        <ProductList list={product} 
        onDeleteHandle={deleteProduct} 
        onEdithandle={editProduct}
        />
        </>
    )}
    {showPage === PageEnum.add && <AddProduct backBtn={showListPage} onSubmitHandle={addProductHandle}/> }
    {showPage === PageEnum.edit && <EditProduct />}
    </section>
    </>
   ) 
    
}

export default Home;