import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
            <div className="logo">

            </div>
            <div className="links__container">
                <div className="link">
                  <Link to="/home">Home</Link>
                </div>
                <div className="link">
                  <Link to="/admin">Admin</Link>
                </div>
            </div>
            <div className="search">

            </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
