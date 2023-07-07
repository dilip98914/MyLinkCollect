import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function () {
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
    <tr className="job-entry highlighted">
      <td style={{ "width": "100px", "vertical-align": "middle" }}>
        <NavLink className="job-url text-center" 
         to="/company-description"
        >
          <img src="imgs/XpiJSfTGiYuVhX11p3U8R47OBLlr9twUQNbTxM0K.png" alt="Unlockd" className="company-logo" />
        </NavLink>
      </td>
      <td>
        <NavLink className="job-url" 
         to="/company-description"
        itemprop="url">
          <p className="job-title">Operations Manager</p>
          <span>Unlockd</span>
          <div style={{ "margin-top": "4px;" }} className="hidden-xs">
            <small>
              <span>
                💼 Operations
              </span>
              <span style={{ "margin-left": "10px;" }}>
                ⏰ Full Time
              </span>
              <span style={{ "margin-left": "10px;" }}>
                🌍 Remote
              </span>
              <span style={{ "margin-left": "20px;" }}>
                📌 <b className="text-danger">Sticky</b>
              </span>
            </small>
          </div>
        </NavLink>
      </td>
      <td style={{ "width": "150px", "vertical-align": "middle;" }}>
        <small style={{ "display": "inline-block", "margin-top": "6px;" }}>
          <div>
            <span itemprop="datePosted" datetime="2023-06-16" style={{ "color": "#888;" }}>12 days ago</span>
            <br />
            ✅ 47 applications
          </div>
        </small>
      </td>
    </tr>
    <tr className="job-entry ">
      <td style={{ "width": "100px", "vertical-align": "middle" }}>
        <NavLink className="job-url text-center" 
        to="/company-description"
        >
        
          <img src="imgs /ncJnroXT02yhaoed5LSaIOxcgw0ROqBVYdChJ1Of.png" alt="ether.fi" className="company-logo" />
        </NavLink>
      </td>
      <td>
        <NavLink className="job-url" 
         to="/company-description"
        itemprop="url">
          <p className="job-title">UI/UX Designer, Head of Design</p>
          <span>ether.fi</span>
          <div style={{ "margin-top": "4px;" }} className="hidden-xs">
            <small>
              <span>
                💼 Design
              </span>
              <span style={{ "margin-left": "10px;" }}>
                ⏰ Full Time
              </span>
              <span style={{ "margin-left": "10px;" }}>
                🌍 Denver or Cayman Islands
              </span>
              <span style={{ "margin-left": "20px;" }}>
                📌 <b className="text-danger">Sticky</b>
              </span>
            </small>
          </div>
        </NavLink>
      </td>
      <td style={{ "width": "150px", "vertical-align": "middle;" }}>
        <small style={{ "display": "inline-block", "margin-top": "6px;" }}>
          <div>
            <span itemprop="datePosted" datetime="2023-06-01" style={{ "color": "#888;" }}>26 days ago</span>
            <br />
            🔥 53 applications
          </div>
        </small>
      </td>
    </tr>


  </>
}