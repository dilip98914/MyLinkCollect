export default function () {
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
          <a href="https://crypto.jobs" 
          style={{
            "width": "40px",
            "height": '40px', 
            "float": "left", 
            "margin-left": "15px",
            "margin-right": "15px",
            "margin-top": "6px"
              }}>
            <img src="/imgs/cryptojobs-navbar-logo.png" className="img-responsive" />
          </a>
          <a className="navbar-brand" href="https://crypto.jobs">
            CryptoJobs
          </a>
        </div>
        <div className="collapse navbar-collapse" id="app-navbar-collapse">
          <ul className="nav navbar-nav visible-lg">
            <li>
              <small>Getting you from Web2 to Web3</small>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <span style={{"padding": "10px"}} className="hidden-xs"></span>
            </li>

            <li><a href="https://crypto.jobs/login" className="post-job normal-btn">Log In</a></li>
            <li><a href="https://crypto.jobs/register" className="post-job normal-btn">Sign Up</a></li>
            <li><a href="https://crypto.jobs/hire-talent" className="post-job">Hire Talent</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav className="navbar navbar-default second-navbar-static-top">
      <ul className="navbar-center">
        <li><a href="https://crypto.jobs" className="center-btn job-btn">💼 Jobs</a></li>
        <li><a href="https://crypto.jobs/companies" className="center-btn company-btn">🚀 Companies</a></li>
        <li><a href="https://crypto.jobs/talent" className="center-btn talent-btn">👋🏻 Talents</a></li>
        <li><a href="https://crypto.jobs/events" className="center-btn event-btn">📅 Events</a></li>
      </ul>
    </nav>

  </>
}