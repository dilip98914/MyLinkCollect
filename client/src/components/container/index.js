import GigsList from "../gigsList";
import PaginationWIdget from "../paginationWIdget";
import SideWidget from "../sideWidget";

export default function () {
  return <>
    <div className="container-fluid">
      <div className="row main-content">
        <div className="col-md-8 content-panel">
          <div className="panel panel-default">
            <div className="panel-body">
              <table className="table table-jobs">
                <tbody>
                  <tr>
                    <td colspan="3" style={{"border-top": "0px;"}}>
                      <h3 className="latest-jobs">✨ Latest Web3 jobs</h3>
                    </td>
                  </tr>
                    <GigsList/>
                </tbody>
              </table>
            </div>
          <PaginationWIdget/>
          </div>
        </div>
          <SideWidget/>
      </div>
    </div>
  </>
}