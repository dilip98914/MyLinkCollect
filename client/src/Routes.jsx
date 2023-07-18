import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.jsx';
import Home from './components/home';
import Login from './components/auth/login.js';
import LoginPopup from './components/auth/loginPopup.js';
import RegisterPopup from './components/auth/registerPopup.js';
import Register from './components/auth/register.js';
import Container from './components/container';
import DeveloperContainer from './components/container/developerContainer.js';

import HireTalent from './components/hireTalent/index.js';
import CreateCompany from './components/createCompany/index.js';
import GigDescription from './components/gigDescription/index.js';
import ForgetPassword from './components/auth/forgetPassword.js';
import ResetPassword from './components/auth/resetPassword.js';
import UserProfile from './components/userProfile/index.js';

function Routes(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* route rediect is handled by privat route?? set it up using context api */}
          <PrivateRoute exact path="/" Component1={Home} SubComponent={Container} name="home" />
          <PrivateRoute exact path="/devs" Component1={Home} SubComponent={DeveloperContainer} name="devs" />
          <Route path='/login'>
            <Home Component={Login} />
          </Route>
          <Route path='/login/popup'>
            <Home Component={LoginPopup} />
          </Route>
          <Route path='/register' exact>
            <Home Component={Register} />
          </Route>
          <Route path='/forget-password' exact>
            <Home Component={ForgetPassword} />
          </Route>
          <Route path='/reset-password' exact>
            <Home Component={ResetPassword} />
          </Route>
          <Route path='/company-description' exact>
            <Home Component={GigDescription} />
          </Route>
          <Route path='/register/popup' exact>
            <Home Component={RegisterPopup} />
          </Route>
          <Route path='/hire-talent' exact>
            <Home Component={HireTalent} />
          </Route>
          <Route path='/gigs-detail' exact>
            <Home Component={GigDescription} />
          </Route>
          <Route path='/company/create' exact>
            <Home Component={CreateCompany} />
          </Route>
          <Route path='/profile' exact>
            <Home Component={UserProfile} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default Routes;