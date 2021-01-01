//Dependencies
import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';


const AdminDashboard = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);
    //watches
    const [watchesList, setWatchesList] = useState();
    //add-item
    const [addName, setAddName] = useState('');
    const [addDetails, setAddDetails] = useState('');
    const [addPrice, setAddPrice] = useState('');
    const [addCategory, setAddCategory] = useState('');

    React.useEffect(() => {
        console.log(userData)
    }, []);

    const viewAllWatches = () => {
        axios.get('./api/products')
        .then((res) => {
            setWatchesList(res.data);
            console.log(watchesList)
        })
        .catch((error) => {
            console.error("Error: " + error)
        })
    }

    const addWatch = () => {
        const payload = {
            name: addName,
            details: addDetails,
            price: addPrice,
            category: addCategory
        };
        axios.post('./api/products/addWatch', payload)
        .then(function (response) {
            viewAllWatches();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const deleteWatch = (id) => {
        axios.delete("/api/products/deleteWatch/" + id)
        .then((res) => {
            viewAllWatches();
        })
        .catch((err) => {
            console.log(err);
        })
    }
     
    return (
        <div className="profile">
            <h1>Admin</h1>
            {/* Add watch */}
            <div className="add-watch__container">
                <h3>Add new watch:</h3>
                <div className="input__container">
                    <label>Name</label>
                    <input type="text" value={addName} onChange={(e) => setAddName(e.target.value)}></input>
                </div>
                <div className="input__container">
                    <label>Details</label>
                    <textarea rows="4" cols="50" value={addDetails} onChange={(e) => setAddDetails(e.target.value)}></textarea>
                </div>
                <div className="input__container">
                    <label>Price</label>
                    <input type="number" min="1" step="any" value={addPrice} onChange={(e) => setAddPrice(e.target.value)}></input>
                </div>
                <div className="input__container">
                    <label>Category</label>
                    <select value={addCategory} onChange={(e) => setAddCategory(e.target.value)}>
                        <option value="" disabled>Choose a type</option>
                        <option value="automatic">Automatic</option>
                        <option value="chronograph">Chronograph</option>
                        <option value="dress">Dress</option>
                    </select>
                </div>
                <button onClick={addWatch}>Add watch</button>
            </div>
            {/* View watches */}
            <div>
                <button onClick={viewAllWatches}>View all watches</button>
            {watchesList &&
            watchesList.map(item => 
                <div>
                    <p>Name: {item.name}</p>
                    <p>Category: {item.category}</p>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => deleteWatch(item._id)}>Delete</button>
                </div>
            )}
            </div>
        </div>
    )
}

export default AdminDashboard