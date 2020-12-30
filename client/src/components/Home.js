//Dependencies
import {useState, useEffect} from 'react';
import axios from 'axios';

const Home = (props) => {
    //UserData
    // eslint-disable-next-line
    const [products, setProducts] = useState([]);

    useEffect(() => {
        readProducts();
    }, []);

    

    const readProducts = () => {
        axios.get('./api/products')
        .then((res) => {
            setProducts(res.data);
        })
        .catch((error) => {
            console.error("Error: " + error)
        })
    }

    const addToWatchlist = (itemId, itemName) => {
        const payload = {
            userId: props.userData._id,
            watchId: itemId,
            watchName: itemName
        }
        axios.put("/api/users/addToWatchlist", payload)
        .then(res => {
        })
        .catch(err => {
            console.log(err);
        })
    }

  
    return (
        <div className="home">

            <div className="hero">
                <div className="container">
                    <div className="column-1">
                        <div className="item-1">

                        </div>
                    </div>
                    <div className="column-2">
                        <div className="item-2">

                        </div>
                        <div className="item-3">

                        </div>
                    </div>
                </div>
            </div>

            <div className="category__container">
                <div className="header">
                    <h1>Chronograph watches</h1>
                </div>
                <div className="container">
                    {(products.filter(item => item.category === 'chronograph')).map(item => 
                        <div className="item">
                            <div className="image"></div>
                            <p className="name">{item.name}</p>
                            <p>{item.details.length < 40 ? item.details : `${item.details.slice(0,40)}...`}</p>
                            <p className="price">${item.price}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="category__container">
                <div className="header">
                    <h1>Automatic watches</h1>
                </div>
                <div className="container">
                    {(products.filter(item => item.category === 'automatic')).map(item => 
                        <div className="item">
                            <div className="image"></div>
                            <p className="name">{item.name}</p>
                            <p>{item.details.length < 40 ? item.details : `${item.details.slice(0,40)}...`}</p>
                            <p className="price">${item.price}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="category__container">
                <div className="header">
                    <h1>Dress watches</h1>
                </div>
                <div className="container">
                    {(products.filter(item => item.category === 'dress')).map(item => 
                        <div className="item">
                            <div className="image"></div>
                            <p className="name">{item.name}</p>
                            <p>{item.details.length < 40 ? item.details : `${item.details.slice(0,40)}...`}</p>
                            <p className="price">${item.price}</p>
                            <button onClick={() => addToWatchlist(item._id, item.name)}>Add to watchlist</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="footer">
                <h1>Created by Joshua Lausberg</h1>
            </div>

        </div>
    )
}

export default Home