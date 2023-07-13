import { useEffect, useState } from "react";
import GigsList from "../gigsList";
import PaginationWIdget from "../paginationWIdget";
import SideWidget from "../sideWidget";
import axios from 'axios'

export default function () {
  const [jobs, setJobs] = useState([])//todo a  dummy job in state

  useEffect(() => {
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
        <div className="col-md-8 content-panel">
          <div className="panel panel-default">
            <div className="panel-body">
              <table className="table table-jobs">
                <tbody>
                  <tr>
                    <td colspan="3" style={{ "border-top": "0px;" }}>
                      <h3 className="latest-jobs">✨ Latest Web3 jobs</h3>
                    </td>
                  </tr>
                  <GigsList jobs={jobs} />
                </tbody>
              </table>
            </div>
            <PaginationWIdget />
          </div>
        </div>
        <SideWidget />
      </div>
    </div>
  </>
}