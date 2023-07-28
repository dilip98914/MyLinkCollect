import { useEffect, useState } from "react";
import GigsList from "../gigsList";
import PaginationWIdget from "../paginationWIdget";
import SideWidget from "../sideWidget";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function () {
  const [jobs, setJobs] = useState([])//todo a  dummy job in state
  const history = useHistory()


  useEffect(() => {
    if (window.previousPage == 'login' && window.store.isAuth == true) {
      alert('You are already logged in!')
    } else {
      if (localStorage.getItem('token')) {
        const url = `http://localhost:3001/api/v1/user/auth`
        axios.post(url, { token: localStorage.getItem('token') }).then(response => {
          if (response.data.token == null) {
            window.store.previousPage = 'home';
            window.store.isAuth = false;
            window.store.authMessage = "token invalid!";
            history.push('/login');
          } else {
            localStorage.setItem('isAuthenticated', "true")
            window.previousPage = 'home'
            // alert('Welcome ' + response.data.email)
          }
        }).catch(err => {
          history.push('/login');
          alert('Something went wrong!')
        })

      } else {
        history.push('/login');
      }


    }

    getJobs()
  }, [])

  const getJobs = () => {
    const url = `http://localhost:3001/api/v1/project/home`
    axios.get(url).then(response => {
      setJobs(response.data.data)
      console.log("rrrrrrrrrrrrrrrrr", response.data.data)
    })
  }

  return <>
    <div className="container-fluid">
      <div className="row main-content">
        <div style={{
          float: 'none',
          margin: 'auto'
        }} className="col-md-10  content-panel">
          <div style={{ textAlign: 'center' }} className="jumbotron">
            <h3>Privacy Oriented freelance platform for developers and clients/companies</h3>
            <p>Register in 2 simple steps: No hassle of creating portfolio</p>
            <p>Find best talents from big techs prodigy to experienced engineers  </p>

            <p><a class="btn btn-primary btn-lg" href="#" role="button">Register Now!</a></p>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <table className="table table-jobs">
                <tbody>
                  <tr>
                    <td colspan="3" style={{ "border-top": "0px;" }}>
                      <h3 className="latest-jobs"> Latest Jobs</h3>
                    </td>
                  </tr>
                  <GigsList jobs={jobs} />
                </tbody>
              </table>
            </div>
            <PaginationWIdget />
          </div>
        </div>
        {/* <SideWidget /> */}
      </div>
    </div>
  </>
}