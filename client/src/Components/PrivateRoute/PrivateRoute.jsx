import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {

   const rol = localStorage.getItem("isAdmin")

 
    return (
        
        (rol === 'true') ? 
    
         <Route {...rest} render={props => (
             
                 <Component {...props} />
            
         )} />
         : <Redirect to="/" />
    );
    
};

export default PrivateRoute;