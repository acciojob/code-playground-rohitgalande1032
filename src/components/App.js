
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
    <div>
        <p>{login ? "Logged in, Now you can enter Playground" : "You are not anthenticated, Please login first"}</p>
        <nav>
          <ul>
            <li><Link to="/play-ground">PlayGround</Link></li>
            <li><Link to="/">Login</Link></li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<p>Login</p>}/>
            <Route 
            path="/play-ground" 
            element={<PrivateRoute login={login} />}
          />
        </Routes>
        <button onClick={handleClick}>{login ? "Logout" : "Login"}</button>
    </div>
    </BrowserRouter>
  )
}

export default App
