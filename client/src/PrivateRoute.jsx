import React from 'react';
// import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom'
function PrivateRoute({Component1,SubComponent,...rest}) {
    // const isAuth = useSelector(state=>state.login.isAuth)
    const isAuth=true;
    console.log('ssssssssssssssss',rest.name)

    return (
        isAuth ? 
        <Route {...rest} render={(props)=><Component1 Component={SubComponent}  {...props}/>} />
        :
        <Redirect to='/login' />
    );
}

export default PrivateRoute;