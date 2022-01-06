import { useState } from "react"
import "./styles/productCard.css"

const ProductCard = ({data}) => {

    const [info, setInfo] = useState(data)
    // console.log(info)

    return (
        <div className="container-card">
            {/* <img src={info.productImg[0]} alt={info.productName} className="card-img" /> */}
            <div className="card-img"></div>
            <div className="product-info">
                <div className="info-header">
                    <h4 className="product-title">{info.productName}</h4>
                    <p className="product-price">${info.price}</p>
                </div>
                <div className="info-body">
                <p className="product-description">Descripcion</p>
                </div>
            </div>
            <span className="category">
                <p>{info.category[0].toUpperCase() + info.category.slice(1)}</p>
            </span>
            <button className="buy"><i className="fas fa-cart-plus"></i></button>
        </div>
    )
}

export default ProductCard
