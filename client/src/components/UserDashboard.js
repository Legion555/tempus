//Dependencies
import React from 'react';
import axios from 'axios';

const UserDashboard = (props) => {

    React.useEffect(() => {
        console.log(props.userData)
    }, []);    

    const removeFromWatchlist = (itemId) => {
        const payload = {
            userId: props.userData._id,
            watchId: itemId
        }
        axios.put("/api/users/removeFromWatchlist", payload)
        .then(res => {
            props.updateUserData();
        })
        .catch(err => {
            console.log(err);
        })
    }
     
    return (
        <div className="profile">
            <h1>User dash</h1>
            <h3>Watchlist:</h3>
            {props.userData.watchlist.map(item =>
                <div>
                    <p>{item.name}</p>
                    <button onClick={() => removeFromWatchlist(item.id)}>Remove from watchlist</button>
                </div>
            )}
        </div>
    )
}

export default UserDashboard