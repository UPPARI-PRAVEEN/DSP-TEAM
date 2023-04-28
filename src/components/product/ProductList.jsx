// components/ProductList.jsx

import React, { useState } from 'react';
import ProductCard from './Productcard';
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
