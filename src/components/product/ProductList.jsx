// components/ProductList.jsx



import product1 from '../../assets/p16.jpeg'
import product2 from '../../assets/p17.jpeg'
import product3 from '../../assets/p19.jpeg'
import product4 from '../../assets/p19.jpeg'
import product5 from '../../assets/p20.jpeg'
import product6 from '../../assets/p16.jpeg'
import product7 from '../../assets/p17.jpeg'
import product8 from '../../assets/p19.jpeg'
import product9 from '../../assets/p11.jpeg'
import product10 from '../../assets/p12.jpeg'
import product11 from '../../assets/p13.jpeg'
import product12 from '../../assets/p13.jpeg'
import product13 from '../../assets/p14.jpeg'
import product14 from '../../assets/p15.jpeg'
/*
import React, { useState } from 'react';
import ProductCard from './Productcard';
const ProductList = () => {


    // Dummy data for available t-shirts
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product1,
        },
        {
            id: 2,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product2,
        },
        {
            id: 3,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product3,
        },
        {
            id: 4,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product4,
        },
        {
            id: 5,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product5,
        },
        {
            id: 6,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product6,
        },
        {
            id: 7,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product7,
        },
        {
            id: 8,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product8,
        },
        {
            id: 9,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product9,
        },
        {
            id: 10,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product10,
        },
        {
            id: 11,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product11,
        },
        {
            id: 12,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product12,
        },
        {
            id: 13,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product13,
        },
        {
            id: 14,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product14,
        },
        {
            id: 15,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product1,
        },
        
    ]);

    return (
        <div>
            <h1 className='product'>Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;


*/

import { useState } from "react";
import { Link } from 'react-router-dom';

const products = [
    
        {
            id: 1,
            name: 'Crewneck t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product1,
        },
        {
            id: 2,
            name: 'V-neck t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product2,
        },
        {
            id: 3,
            name: 'Henley t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product3,
        },
        {
            id: 4,
            name: 'Raglan t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product4,
        },
        {
            id: 5,
            name: 'Pocket t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product5,
        },
        {
            id: 6,
            name: 'Scoop neck t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product6,
        },
        {
            id: 7,
            name: 'Customizable T-Shirt 1',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product7,
        },
        {
            id: 8,
            name: 'Tank top t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product8,
        },
        {
            id: 9,
            name: 'Graphic t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product9,
        },
        {
            id: 10,
            name: 'Polo t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product10,
        },
        {
            id: 11,
            name: 'Long sleeve t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product11,
        },
        {
            id: 12,
            name: 'Crop top t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product12,
        },
        {
            id: 13,
            name: 'Baseball t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product13,
        },
        {
            id: 14,
            name: 'Muscle t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product14,
        },
        {
            id: 15,
            name: 'Tie-dye t-shirt',
            color: 'Black',
            size: 'M',
            price: 200,
            discout: "50%",
            image: product1,
        },
        
    
];

function ProductList() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div class="search-box">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search products..."
            />
            <button type="submit">Go</button>
            <div className='heading'><h1>Products</h1></div>

            </div>
            

            <div className="product-card">
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <div className="product-image">
                            <img classname= "image-section" src={product.image} alt={product.name} />
                        </div>
                        <div className="product-details">
                            
                        </div>

                        <h2>{product.name}</h2>
                        <p className="details">color: {product.color}</p>
                        <p>Discount: {product.discout}</p>
                       

                        <div className="flexing">
                            <p>Size: {product.size}</p>
                            <p className="cost">Price: {product.price}</p>
                            <p className="o">{product.discount}</p>
                        </div>

                        <Link to="/checkout">
                            <button>Buy Now</button>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default ProductList;