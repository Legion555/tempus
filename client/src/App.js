import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';
import Profile from './components/user-dashboard';
import { UserProvider } from './context/UserContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('home');

  

  return (
    <UserProvider>
    <div className="App">
        <div className="navbar">
            <div className="logo">

            </div>
            <div className="links__container">
                <div className="link">
                  <p onClick={() => setView('home')}>Home</p>
                </div>
                <div className="link">
                  <p onClick={() => setView('admin')}>Admin</p>
                </div>
            </div>
            {isLoggedIn ?
              <div className="profile">
                <p onClick={() => setView('profile')}>Profile</p>
                <p onClick={() => setIsLoggedIn(false)}>Logout</p>
              </div>
              :
              <div className="profile">
                <p onClick={() => setView('login')}>Login</p>
              </div>
            }
            
        </div>
        {view === 'home' &&
          <Home />
        }
        {view === 'admin' &&
          <Admin />
        }
        {view === 'login' &&
          <Login setIsLoggedIn={setIsLoggedIn} setView={setView}/>
        }
        {view === 'profile' &&
          <Profile />
        }
    </div>
    </UserProvider>
  );
}

export default App;
