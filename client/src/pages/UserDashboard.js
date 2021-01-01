//Dependencies
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const UserDashboard = (props) => {
    const dispatch = useDispatch();

    const userData = useSelector(state => state.userData);

    React.useEffect(() => {
        console.log(userData)
    // eslint-disable-next-line
    }, []);    

    const removeFromWatchlist = (itemId) => {
        const payload = {
            userId: userData._id,
            watchId: itemId
        }
        axios.put("/api/users/removeFromWatchlist", payload)
        .then(res => {
            props.readUserData();
        })
        .catch(err => {
            console.log(err);
        })
    }
     
    return (
        <div className="profile">
            <h1>User dash</h1>
            <h3>Watchlist:</h3>
            {userData.watchlist.map(item =>
                <div>
                    <p>{item.name}</p>
                    <button onClick={() => removeFromWatchlist(item.id)}>Remove from watchlist</button>
                </div>
            )}
        </div>
    )
}

export default UserDashboard