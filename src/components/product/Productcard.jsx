// components/ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img className='image-container' src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
                <h2 class="menu-card-title">{product.name}</h2>
                
                    <p className='deatails'>color: {product.color}</p>
                    <p>Size: {product.size}</p>
                    
                
                <p className='deatails'>color: {product.color}</p>
                <div className='flexing'>
                <p>Size: {product.size}</p>
                
                <p class="cost">Price: {product.price}</p>
                <p class="o">{product.discout}</p>
                
                </div>
                <Link to="/checkout"><button>Buy Now</button></Link>
            </div>
        </div>

    );
};

export default ProductCard;
