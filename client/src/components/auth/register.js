import { useEffect, useState } from "react";
import axios from 'axios'

export default function () {
  //follor a pattern , state is tranferred as it is to backend

  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
    firstName: '',
    lastName: '',
  })

  useEffect(() => {
    // registerUser()
  }, [])

  const registerUser = (e) => {
    e.preventDefault()
    const url = `http://localhost:3001/api/v1/user/register`
    // if (user.password !== user.confirmPassword) {
    //   alert('password dont match in fields!')
    //   return
    // }
    console.log('usssssssssssssssssssssss', user)
    axios.post(url, user).then(response => {
      // setJobs(response.data.data)
      console.log("rrrrrrrrrrrrrrrrr", response.data.data)
    })
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
              <h3>Signup</h3>
              <hr />
              <form class="form-horizontal" method="POST">
                {/* <input type="hidden" name="_token" value="ivzk6AOiCXznEQLXb04vS9czWXRYL5DAsU9IliPB" /> */}
                <div class="form-group">
                  <div class="col-md-12">
                    <label>What are you looking for?</label>
                    <select value={user.type} name="type" class="form-control" required>
                      <option value>Select your Goal</option>
                      <option value='developer'>developer</option>
                      <option value="client">client</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <label>First Name</label>
                    <input type="text" value={user.firstName} class="form-control" onChange={handleChange} name="firstName" required autofocus />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Last Name</label>
                    <input type="text" value={user.lastName} class="form-control" onChange={handleChange} name="lastName" required />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Email Address</label>
                    <input type="email" class="form-control" value={user.email} name="email" onChange={handleChange} autocomplete="username" required />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Password</label>
                    <input type="password" class="form-control" value={user.password} name="password" onChange={handleChange} autocomplete="new-password" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" value={user.confirmPassword} onChange={handleChange} name="confirmPassword" autocomplete="new-password" />
                  </div>
                </div>
                <div class="form-group">
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <button onClick={registerUser} class="btn btn-success">
                      Sign up
                    </button>
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