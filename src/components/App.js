
import React, { useState } from "react";
import './../styles/App.css';
import PrivateRoute from "./PrivateRoute";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const App = () => {
  const [login, setLogin] = useState(false);

  const handleClick = ()=> {
    setLogin(!login)
  }

  return (
    <BrowserRouter>
    <div id="main-container">
        <p>{login ? "Logged in, Now you can enter Playground" : "You are not authenticated, Please login first"}</p>
        <nav>
          <ul>
            <li><Link to="/play-ground">PlayGround</Link></li>
            <li><Link to="/">Log In</Link></li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<p>Login</p>}/>
            <Route 
            path="/play-ground" 
            element={<PrivateRoute login={login} />}
          />
        </Routes>
        <button onClick={handleClick}>{login ? "Log Out" : "Log In"}</button>
    </div>
    </BrowserRouter>
  )
}

export default App
