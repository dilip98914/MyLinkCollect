import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
              // "margin-right": "5px",
              "margin-top": "6px"
            }}>
            <img src="/imgs/logo.svg" className="img-responsive" />
          </NavLink>
          <NavLink className="navbar-brand" to="/">
            GiggChad
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
            <li>
              {isAuthenticated == true ?
                <FontAwesomeIcon
                  onClick={() => { history.push('/profile') }}
                  style={{
                    margin: '10px 10px',
                    cursor: 'pointer'
                  }}
                  icon={faUser} color='#925090' size='2x' />
                :
                <NavLink
                  to='/login'
                  className="post-job normal-btn">Login</NavLink>

              }
            </li>
            <li>
              {isAuthenticated == true ?
                <FontAwesomeIcon
                  onClick={logoutUser}
                  style={{
                    margin: '10px 20px',
                    cursor: 'pointer'
                  }}
                  size='2x'
                  icon={faRightFromBracket} />
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