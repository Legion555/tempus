//Dependencies
import axios from 'axios';
import {useState} from 'react';
const Joi = require('@hapi/joi');


const Admin = (props) => {
    //add-item
    const [addName, setAddName] = useState('');
    const [addDetails, setAddDetails] = useState('');
    const [addPrice, setAddPrice] = useState('');
    const [addCategory, setAddCategory] = useState('');

    const addWatchValidation = (data) => {
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            details: Joi.string().required(),
            price: Joi.number().required(),
            category: Joi.string().required()
        });
        return schema.validate(data);
    }

    const addWatch = () => {
        const payload = {
            name: addName,
            details: addDetails,
            price: addPrice,
            category: addCategory
        };
        console.log(addWatchValidation(payload));
        axios.post('./api/products/addWatch', payload)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    

  
    return (
        <div className="dashboard">
            <h1>Admin</h1>
            
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

        </div>
    )
}

export default Admin