//Dependencies
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateView, updateUserData } from '../actions';

import { FiWatch } from 'react-icons/fi';


const WatchCard = (props) => {
    const dispatch = useDispatch();

    const userData = useSelector(state => state.userData);
    const isLogged = useSelector(state => state.isLogged);

    const addToWatchlist = (itemId, itemName) => {
        const payload = {
            userId: userData._id,
            watchId: itemId,
            watchName: itemName
        }
        axios.put("/api/users/addToWatchlist", payload)
        .then(res => {
            //update local user data
            axios.get('/api/users', {
                params: {
                    email: userData.email
                }
            })
            .then(res => {
                //set user data
                const newUserData = res.data;
                dispatch(updateUserData(newUserData));
                //set headers
                const userToken = res.headers["auth-token"];
                sessionStorage.setItem('userToken', userToken);
            })
            .catch(err => {
                console.log("Error: " + err);
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    const removeFromWatchlist = (itemId) => {
        const payload = {
            userId: userData._id,
            watchId: itemId
        }
        axios.put("/api/users/removeFromWatchlist", payload)
        .then(res => {
            //update local user data
            axios.get('/api/users', {
                params: {
                    email: userData.email
                }
            })
            .then(res => {
                //set user data
                const newUserData = res.data;
                dispatch(updateUserData(newUserData));
                //set headers
                const userToken = res.headers["auth-token"];
                sessionStorage.setItem('userToken', userToken);
            })
            .catch(err => {
                console.log("Error: " + err);
            })
        })
        .catch(err => {
            console.log(err);
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
            {isLogged ?
                <div>
                    {userData.watchlist.find(item => item.id === props._id) === undefined ?
                    <button onClick={() => addToWatchlist(props._id, props.name)}>Add to watchlist</button> :
                    <button onClick={() => removeFromWatchlist(props._id)}>Already being watched</button>
                    }
                    <button onClick={() => dispatch(updateView('product'))}>View</button>
                </div>
                :
                <div>
                    <button onClick={() => dispatch(updateView('login'))}>Login to add to watchlist</button>
                    <button onClick={() => dispatch(updateView('product'))}>View</button>
                </div>
            }
        </div>
    )
}

export default WatchCard