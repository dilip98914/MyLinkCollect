import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.jsx';
import Home from './components/home';
import Login from './components/auth/login.js';
import Register from './components/auth/register.js';
import Container from './components/container';


function Routes(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path="/" Component1={Home} SubComponent={Container} name="home" />
                    <Route path='/login'>
                        <>
                            <Home Component={Login}  />
                        </>
                    </Route>
                    <Route path='/register' exact>
                        <Register />
                    </Route>
                    {/* <PrivateRoute exact path="/" Component={Home} /> */}
                    {/* <PrivateRoute   path="/jobs" Component={DisplayJobs}/> */}
                </Switch>
            </BrowserRouter>
        </div>

    );
}

export default Routes;