import { useEffect, useState } from "react";
import GigsList from "../gigsList";
import PaginationWIdget from "../paginationWIdget";
import SideWidget from "../sideWidget";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import DeveloperList from "../developerList";

export default function () {
  const [jobs, setJobs] = useState([])//todo a  dummy developer in state
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
    const url = `http://localhost:3001/api/v1/profile/developer`
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      setJobs(response.data.data)
      console.log("rrrrrrrrrrrrrrrrr", response.data.data)
    })
  }

  return <>
    <div className="container-fluid">
      <div className="row main-content">
        <div className="col-md-8 content-panel">
          <div className="panel panel-default">
            <div className="panel-body">
              <table className="table table-jobs">
                <tbody>
                  <tr>
                    <td colspan="3" style={{ "border-top": "0px;" }}>
                      <h3 className="latest-jobs">✨ Developers ,Desginers</h3>
                    </td>
                  </tr>
                  <DeveloperList developers={jobs} />
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