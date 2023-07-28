import { useEffect, useState } from "react"
import axios from 'axios';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenNib, faStar, faWallet, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Audio, Blocks } from 'react-loader-spinner'
export default function () {
  const [user, setUser] = useState(null)
  const [requestButton, setRequestButton] = useState(false)

  useEffect(() => {
    if (!window.store?.user) {
      getUserProfile()
      checkAlreadyVerified()
    } else {
      setUser(window.store.user)
      checkAlreadyVerified()
    }
  }, [])

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const getUserProfile = () => {
    //api call
    const url = `http://localhost:3001/api/v1/profile/`
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      console.log("getUserProfile", response.data.data)
      window.store.user = response.data.data;//todo:replacewith context api 
      setUser(response.data.data)
    }).catch(err =>
      // alert('Something went wrong!')
      console.log('Something went wrong!')
    )
  }

  const editProfile = () => {
    alert('tried editing!')
  }

  const checkAlreadyVerified = () => {
    const url = `http://localhost:3001/api/v1/profile/verify/request`
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      if (response.data.data.new === false) {
        setRequestButton(true)
      }
    }).catch(err =>
      console.log('Something went wrong!')
    )
  }

  const requestVerification = (e) => {
    console.log('hiiiiiiiiii', e)
    // e.preventDefault()
    const url = `http://localhost:3001/api/v1/profile/verify/request`
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      if (response.data.data.new === true) {
        setRequestButton(true)
      }
    }).catch(err =>
      console.log('Something went wrong!')
    )
  }
  const handleSubmit = () => {
    console.log('submittyted')
  }

  return <>
    {
      user !== null ? <div class="container-fluid">
        <div class="row main-content">
          <div class="col-md-8 content-fluid col-md-offset-2">
            <div class="panel panel-default">
              <form onSubmit={handleSubmit}
              // method="POST"
              // action="/companies/create"
              // enctype="multipart/form-data"
              >
                <h3 class="title-page">Profile</h3>
                <div class="header-sec">
                  <div class="header-banner" >
                    <div class="cover-logo">
                      <img class="logo-preview" src="/imgs/profile-dummy.png" />
                      <label for="file-logo-upload">
                        <span class="glyphicon glyphicon-pencil"></span>
                      </label>
                      <input id="file-logo-upload" type="file" name="logo" accept="image/*" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <span className="bold-in" style={{ color: '#925090', fontSize: '20px' }}>@{user.username}</span>
                        <p>
                          {
                            [0, 0, 0, 0, 0].map((_, idx) => {
                              if (idx + 1 <= user.rating) {
                                return <>
                                  <FontAwesomeIcon icon={faStar} beat />&nbsp;
                                </>
                              } else {
                                return <>
                                  <FontAwesomeIcon icon={faStarRegular} beat /> &nbsp;
                                </>
                              }
                            })
                          }

                        </p>
                        <p>
                          <i>{user.isVerified ? 'Verified' : "Unverified"}</i> &nbsp; {user.isVerified ? <FontAwesomeIcon icon={faCheck} /> :
                            <>
                              <FontAwesomeIcon icon={faXmark} />&nbsp;&nbsp;
                              <button type="submit" className={requestButton == false ? "btn btn-danger" : 'btn btn-success'} onClick={(e) => requestVerification(e)}>{requestButton == false ? 'Request' : 'Requested...'}</button>
                            </>
                          }
                        </p>

                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ "float": "right" }}>
                          {/* <button onClick={alert('hi')}> */}
                          <FontAwesomeIcon style={{
                            cursor: 'pointer',
                            fontSize: '25px'
                          }} onClick={() => {
                            const bal = 100;
                            alert(
                              `Balance : ${bal} $`
                            )
                          }} icon={faWallet} /> &nbsp;<span style={{ fontSize: '25px' }} >$</span>
                        </div>
                        <div style={{ "float": "right" }}>
                          <strong>Projects</strong> : (12/30)
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
                <div class="content-sec">
                  <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control  big-font-inp"
                      name="name" placeholder="Enter name" />
                  </div>
                  <i className="fa fa-twitter" aria-hidden="true" style={{ "color": "#1DA1F2;" }}></i>

                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control  big-font-inp"
                      name="name" placeholder="Enter email" />
                  </div>
                  <div class="form-group">
                    <label>Change password</label>
                    <input type="password" class="form-control  big-font-inp"
                      name="name" placeholder="Enter new password" />
                  </div>

                  <div class="form-group">
                    <label>Short Summary</label>
                    <textarea class="form-control" name="about_description" rows="7" placeholder="Describe your short summary?"></textarea>
                  </div>
                  <div class="form-group">
                    <label>Skills & Technologies</label>
                    <select class="select2-multiple form-control" name="categories[]" multiple="multiple" id="select2Multiple">
                      <option value="Java">Java</option>
                      <option value="Javascript">Javascript</option>
                      <option value="nodeJS">nodeJS</option>
                      <option value="GIT/CI-CD">GIT/CI-CD</option>
                      <option value="AWS">AWS</option>
                      <option value="REACTJS">REACTJS</option>
                      <option value="Mongo">Mongo</option>
                      <option value="MYSQL">MYSQL</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Gender</label>
                    <select class="form-control" name="is_remote">
                      <option value> -- Select an option -- </option>
                      <option value="MALE">MALE</option>
                      <option value="FEMALE">FEMALE</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label>Are you a developer or looking to hire?</label>
                    <select class="form-control" name="is_remote">
                      <option value> -- Select an option -- </option>
                      <option value="developer">Developer</option>
                      <option value="client">Company/Client</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" id="location" name="location"
                      placeholder="City" />
                  </div>
                  <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" id="location" name="location"
                      placeholder="State" />
                  </div>
                  <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" id="location" name="location"
                      placeholder="Country" />
                  </div>
                  <div class="form-group">
                    <label>Complete Address</label>
                    <input type="text" class="form-control" id="location" name="location"
                      placeholder="Complete Address" />
                  </div>

                  <div class="form-group">
                    <label>Hourly Rate &nbsp;($)</label>
                    <input type="number" class="form-control num-inp" name="community_size" placeholder="Amount(e.g. 12$)" />
                  </div>

                  {/* //resume */}
                  <div class="form-group">
                    <label for="file-logo-upload">
                      <button>upload Resume</button>
                    </label>
                    <input id="file-resume-upload" type="file" name="resume" accept="application/pdf,application/doc" />
                  </div>

                  <div class="form-group">
                    <label>Date of Birth</label>
                    <input type="date" class="form-control num-inp"
                      name="community_size" placeholder="DOB" />
                  </div>
                  {/* bank details */}
                  <div class="form-group">
                    <label>Account Number</label>
                    <input type="number" class="form-control num-inp"
                      name="community_size"
                    />
                  </div>
                  <div class="form-group">
                    <label>IFSC Code</label>
                    <input type="text" class="form-control num-inp"
                      name="community_size"
                    />
                  </div>
                  <div class="form-group">
                    <label>UPI ID-1</label>
                    <input type="text" class="form-control num-inp"
                      name="community_size"
                    />
                  </div>
                  <div class="form-group">
                    <label>UPI ID-2</label>
                    <input type="text" class="form-control num-inp"
                      name="community_size"
                    />
                  </div>
                  <div class="form-group">
                    <label>UPI ID-3</label>
                    <input type="text" class="form-control num-inp"
                      name="community_size"
                    />
                  </div>

                </div>




                <div class="row btn-sec">
                  <NavLink to="/" class="btn btn-default pull-left">
                    Cancel
                  </NavLink>
                  <button type="submit" onClick={editProfile} class="btn btn-success pull-right">
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        :
        <div
          style={{
            textAlign: 'center',
            margin: '10%'
          }}
        >
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
          />
        </div>
    }


  </>
}