
import ProductCard from "./ProductCard"
import "./styles/productCard.css"
import Data from "../Database/db.json"

const ProductList = () => {

    return (
        <div className="container-list">
            {Data.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))}
        </div>
    )
}

export default ProductList
