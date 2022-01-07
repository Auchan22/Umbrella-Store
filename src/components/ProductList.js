import ProductCard from "./ProductCard";
import "./styles/productCard.css";
import { PRODUCTS, filterProductByCategory } from "../Database/Products";

// console.log(filterProductByCategory("conjuntos"));

const ProductList = ({ category }) => {
  return (
    <div className="container-list">
      {category === "Todos"
        ? PRODUCTS.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        : filterProductByCategory(category).map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
    </div>
  );
};

export default ProductList;
