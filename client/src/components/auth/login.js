import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function () {
  const history = useHistory()

  const [user, setUser] = useState({
    email: 'ab@ab.com',
    username: 'ab123',
    password: 'ab@12345',
  })

  useEffect(() => {
    if (
      window.store.previousPage == 'home' &&
      window.store.isAuth == false &&
      window.store.authMessage == 'token invalid!'
    ) {
      alert('Please sign in to continue using!')
    } else if (localStorage.getItem('token')) {
      const url = `http://localhost:3001/api/v1/user/auth`
      axios.post(url, { token: localStorage.getItem('token') }).then(response => {
        if (response.data.token == null) {
          history.push('/login');
        } else {
          window.store.isAuth = true;
          window.store.previousPage = 'login';
          history.push('/');
        }
      }).catch(err => {
        console.error(err)
        history.push('/login');
      })
    }

  }, [])

  const loginUser = (e) => {
    e.preventDefault()
    const url = `http://localhost:3001/api/v1/user/login`
    console.log("aaaaaaaaaaaaa", user)
    axios.post(url, user).then(response => {
      // setJobs(response.data.data)
      localStorage.setItem('token', response.data.token)
      // localStorage.setItem('email', response.data.email)
      history.push('/')
      console.log("rrrrrrrrrrrrrrrrr", response.data.data)
    }).catch(err => alert('Something went wrong!'))
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return <>
    <div class="container-fluid">
      <div class="row main-content">
        <div class="col-md-8 col-md-offset-2 content-panel">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Login</h3>
              <hr />
              <form class="form-horizontal" method="POST">
                <div class="form-group">
                  <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                  <div class="col-md-6">
                    <input id="email" type="email" value={user.email} class="form-control" name="email" onChange={handleChange} autofocus />
                  </div>
                </div>
                <div class="form-group">
                  <p style={{ 'textAlign': 'center' }}>OR</p>
                </div>
                <div class="form-group">
                  <label for="username" class="col-md-4 control-label">Username</label>
                  <div class="col-md-6">
                    <input id="username" type="text" value={user.username} class="form-control" name="username" onChange={handleChange} autofocus />
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="col-md-4 control-label">Password</label>
                  <div class="col-md-6">
                    <input id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      required />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-6 col-md-offset-4">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" name="remember" /> Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-8 col-md-offset-4">
                    <button onClick={loginUser} class="btn btn-success">
                      Login
                    </button>
                    <NavLink class="btn btn-link" to="/forget-password" href="/password/reset">
                      Forgot Your Password?
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}