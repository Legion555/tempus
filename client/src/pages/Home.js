//Dependencies
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import WatchCard from '../components/WatchCard';

const Home = (props) => {
    const userData = useSelector(state => state.userData);
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

  
    return (
        <div className="home">

            <div className="hero">
                <div className="container">
                    <div className="column-1">
                        <div className="item-1">
                            <p>Chronograph watches</p>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="item-2">
                            <p>Dress watches</p>
                        </div>
                        <div className="item-3">
                            <p>Automatic watches</p>
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
                    <WatchCard 
                        setView={props.setView}
                        _id={item._id}
                        name={item.name}
                        details={item.details}
                        price={item.price}
                    />
                    )}
                </div>
            </div>

            <div className="category__container">
                <div className="header">
                    <h1>Automatic watches</h1>
                </div>
                <div className="container">
                    {(products.filter(item => item.category === 'automatic')).map(item => 
                    <WatchCard
                        _id={item._id}
                        name={item.name}
                        details={item.details}
                        price={item.price}
                    />
                    )}
                </div>
            </div>

            <div className="category__container">
                <div className="header">
                    <h1>Dress watches</h1>
                </div>
                <div className="container">
                    {(products.filter(item => item.category === 'dress')).map(item => 
                    <WatchCard
                        setView={props.setView}
                        _id={item._id}
                        name={item.name}
                        details={item.details}
                        price={item.price}
                    />
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