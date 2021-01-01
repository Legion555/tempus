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
        <div className="watch-card">
            <div>
                <FiWatch className="image" />
                <p className="name">{props.name}</p>
                <p>{props.details.length < 40 ? props.details : `${props.details.slice(0,40)}...`}</p>
                <p className="price">${props.price}</p>
            </div>
            {props.userData ?
                <div>
                    {props.userData.watchlist.find(item => item.id === props._id) === undefined ?
                    <button onClick={() => addToWatchlist(props._id, props.name)}>Add to watchlist</button> :
                    <button onClick={() => removeFromWatchlist(props._id)}>Already being watched</button>
                    }
                </div>
                :
                <div>
                    <button>Login to add to watchlist</button>
                </div>
            }
        </div>
    )
}

export default Product