import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function ({ developers }) {
  return <>
    <tr>
      <td colspan="3" style={{ "border-top": "0px;" }}>
        <form className="form-inline form-search" action="https://crypto.jobs" method="get">
          <div className="row">
            <div className="form-group col-md-4 col-sm-12">
              <input type="text" className="form-control" name="search" placeholder="🔍 Role, company, skill" />
            </div>
            <div className="form-group col-md-4 col-sm-12">
              <input type="text" className="form-control" name="location" id="location" placeholder="📍 Location" />
              <a href="#" id="remoteOnly"
                style={{
                  "color": "#002060", "font-size": "12px",
                  "position": "absolute",
                  "right": "30px",
                  "top": "10px",
                  "text-decoration": "underline;"
                }}>Remote-only</a>
            </div>
            <div className="form-group col-md-4 col-sm-12">
              <button type="submit" className="btn btn-success">Search</button>
            </div>
          </div>
        </form>
      </td>
    </tr>
    {
      // username, profilePic, city, state, country,shortSummary,title

      developers.map(dev => {
        return <tr className="job-entry">
          <td style={{ "width": "100px", "vertical-align": "middle" }}>
            <NavLink className="job-url text-center"
              to="/dev-description"//todo:dont show resume on this page because we are stroring resume for our purpose but not others
            >
              <img
                src={`imgs/${dev.profilePic}`}
                alt="Unlockd" className="company-logo" />
            </NavLink>
          </td>
          <td>
            <NavLink className="job-url"
              to="/dev-description"
              itemprop="url">
              <p className="job-title">{dev.username}</p>
              <span>{dev.shortSummary}</span>
              <div style={{ "margin-top": "4px;" }} className="hidden-xs">
                <small>
                  <span>
                    💼 {dev.title}
                  </span>
                  {/* <span style={{ "margin-left": "20px;" }}>
                    📌 <b className="text-danger">Sticky</b>
                  </span> */}
                </small>
              </div>
            </NavLink>
          </td>
          <td style={{ "width": "150px", "vertical-align": "middle;" }}>
            <small style={{ "display": "inline-block", "margin-top": "6px;" }}>
              <div>
                <span itemprop="datePosted" datetime="2023-06-16" style={{ "color": "#888;" }}>
                  {/* 12 days ago */}
                  {`${dev.state},${dev.country}`}
                </span>
                <br />
                ✅ {dev.projectsDelivered}
              </div>
            </small>
          </td>
        </tr>

      })
    }
  </>
}