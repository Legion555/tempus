import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateView, updateUserData, updateIsLogged } from './actions';
//Components
import Home from './pages/Home';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Product from './pages/Product';
//Icons
import { CgLogOut, CgProfile } from 'react-icons/cg';

function App() {
  //State
  const userData = useSelector(state => state.userData)
  const view = useSelector(state => state.view)
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  const readUserData = () => {
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
}

  return (
    <div className="App">
        <div className="navbar">
            <div className="logo">

            </div>
            <div className="links__container">
                <div className="link">
                  <p onClick={() => dispatch(updateView('home'))}>Home</p>
                </div>
            </div>
            {isLogged ?
              <div className="profile">
                {userData.role === 'admin' ?
                <CgProfile className="profile__icon" onClick={() => dispatch(updateView('admin-dashboard'))} /> :
                <CgProfile className="profile__icon" onClick={() => dispatch(updateView('user-dashboard'))} />
                }
                <CgLogOut className="logout__icon" onClick={() => dispatch(updateIsLogged(false))} />
              </div>
              :
              <div className="profile">
                <p onClick={() => dispatch(updateView('login'))}>Login</p>
              </div>
            }
        </div>
        {view === 'home' &&
          <Home />
        }
        {view === 'login' &&
          <Login />
        }
        {view === 'admin-dashboard' &&
          <AdminDashboard readUserData={readUserData} />
        }
        {view === 'user-dashboard' &&
          <UserDashboard readUserData={readUserData} />
        }
        {view === 'product' &&
          <Product readUserData={readUserData} />
        }
    </div>
  );
}

export default App;
