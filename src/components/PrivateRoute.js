import React from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({login}) => {
    
    return login ? <p>Hii welcome to Code Playground</p> : <Navigate to="/" />;
 
}

export default PrivateRoute