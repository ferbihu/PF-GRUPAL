import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => {

   const rol = useSelector (state =>state.role)

 
    return (
        
        (rol === 'admin') ? 
    
         <Route {...rest} render={props => (
             
                 <Component {...props} />
            
         )} />
         : <Redirect to="/" />
    );
    
};

export default PrivateRoute;