import React from 'react';
import axios from 'axios';
import './App.css';
//Components
import Home from './components/Home';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
//Icons
import { CgLogOut, CgProfile } from 'react-icons/cg';

function App() {
  //UserData
  // eslint-disable-next-line
  const [userData, setUserData] = React.useState();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [view, setView] = React.useState('home');

  const updateUserData = () => {
    axios.get('/api/users', {
        params: {
            email: userData.email
        }
    })
    .then(res => {
        //set user data
        const newUserData = res.data;
        setUserData(newUserData);
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
                  <p onClick={() => setView('home')}>Home</p>
                </div>
            </div>
            {isLoggedIn ?
              <div className="profile">
                {userData.role === 'admin' ?
                <CgProfile className="profile__icon" onClick={() => setView('admin-dashboard')} /> :
                <CgProfile className="profile__icon" onClick={() => setView('user-dashboard')} />
                }
                <CgLogOut className="logout__icon" onClick={() => setIsLoggedIn(false)} />
              </div>
              :
              <div className="profile">
                <p onClick={() => setView('login')}>Login</p>
              </div>
            }
        </div>
        {view === 'home' &&
          <Home userData={userData} setUserData={setUserData} />
        }
        {view === 'login' &&
          <Login setUserData={setUserData} setIsLoggedIn={setIsLoggedIn} setView={setView}/>
        }
        {view === 'admin-dashboard' &&
          <AdminDashboard userData={userData} setUserData={setUserData} updateUserData={updateUserData} />
        }
        {view === 'user-dashboard' &&
          <UserDashboard userData={userData} setUserData={setUserData} updateUserData={updateUserData} />
        }
    </div>
  );
}

export default App;
