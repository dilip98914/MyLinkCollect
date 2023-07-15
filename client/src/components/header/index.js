import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

export default function () {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory()

  useEffect(() => {
    console.log('headerrrrrrrrrrrr', window.something)
    localStorage.getItem('isAuthenticated') == 'true' ? setIsAuthenticated(true) : setIsAuthenticated(false)
  }, [localStorage])

  const logoutUser = () => {
    localStorage.clear()
    history.push('/login');
  }

  return <>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
            <span className="sr-only">Toggle Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* testing purpose */}
          {/* <button onClick={logoutUser}>logout1</button> */}
          <NavLink
            to='/'
            style={{
              "width": "40px",
              "height": '40px',
              "float": "left",
              "margin-left": "15px",
              "margin-right": "15px",
              "margin-top": "6px"
            }}>
            <img src="/imgs/cryptojobs-navbar-logo.png" className="img-responsive" />
          </NavLink>
          <NavLink className="navbar-brand" to="/">
            GigsChad
          </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="app-navbar-collapse">
          <ul className="nav navbar-nav visible-lg">
            <li>
              <small>Hire Best Software developers blazing fast!</small>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <span style={{ "padding": "10px" }} className="hidden-xs"></span>
            </li>

            <li><NavLink
              to={isAuthenticated == true ? '/profile' : '/login'}
              className="post-job normal-btn">{isAuthenticated == true ? "Profile" : "Login"}</NavLink></li>
            <li><NavLink to='/hire-talent' className="post-job">Hire Talent</NavLink></li>
            <li>
              {isAuthenticated == true ?
                <button onClick={logoutUser} style={{
                  margin: '5px auto',
                  padding: '6px 30px',
                }} class="btn btn-danger">
                  Logout
                </button>
                :
                <NavLink to="/register" className="post-job normal-btn">{isAuthenticated == true ? "Logout" : "Register"}</NavLink>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-default second-navbar-static-top">
      <ul className="navbar-center">
        <li><NavLink to="/" className="center-btn job-btn">💼 Jobs</NavLink></li>
        {/* <li><NavLink to="/companies" className="center-btn company-btn">🚀 Companies</NavLink></li> */}
        <li><NavLink to="/devs" className="center-btn talent-btn">👋🏻 Developers</NavLink></li>
        {/* <li><NavLink to="/events" className="center-btn event-btn">📅 Events</NavLink></li> */}
      </ul>
    </nav>

  </>
}