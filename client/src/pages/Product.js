//Dependencies
import React, { useState } from 'react';
import axios from 'axios';

import { FiWatch } from 'react-icons/fi';


const Product = (props) => {
    const [productData, setProductData] = useState();

    const readProductData = (productId) => {
        axios.get('/api/products', {
            params: {
                id: productId
            }
        })
        .then(res => {
            setProductData(res.data);
        })
        .catch(err => {
            console.log("Error: " + err);
        })
    }
    

    return (
        <div className="product__container">
            <p>Product</p>
        </div>
    )
}

export default Product