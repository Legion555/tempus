import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
function App() {
  //UserData
  // eslint-disable-next-line
  const [userData, setUserData] = React.useState();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [view, setView] = React.useState('home');

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
                <p onClick={() => setView('admin-dashboard')}>Profile</p> :
                <p onClick={() => setView('user-dashboard')}>Profile</p>
                }
                <p onClick={() => setIsLoggedIn(false)}>Logout</p>
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
          <AdminDashboard />
        }
        {view === 'user-dashboard' &&
          <UserDashboard />
        }
    </div>
  );
}

export default App;
