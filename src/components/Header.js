import React from 'react'
import "./styles/header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className="titulo">
                <h1>Umbrella Store</h1>
            </div>
            <div className="instagram">
                <i className="fab fa-instagram"></i>
            </div>  
        </div>
    )
}

export default Header
