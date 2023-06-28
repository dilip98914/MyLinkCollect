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
                  <tr>
                    <td colspan="3" style={{"border-top": "0px;"}}>
                      <form className="form-inline form-search" action="https://crypto.jobs" method="get">
                        <div className="row">
                          <div className="form-group col-md-4 col-sm-12">
                            <input type="text" className="form-control"  name="search" placeholder="🔍 Role, company, skill"/>
                          </div>
                          <div className="form-group col-md-4 col-sm-12">
                            <input type="text" className="form-control"  name="location" id="location" placeholder="📍 Location"/>
                              <a href="#" id="remoteOnly" 
                              style={{"color": "#002060", "font-size": "12px", 
                              "position": "absolute",
                               "right": "30px",
                                "top": "10px",
                                 "text-decoration": "underline;"}}>Remote-only</a>
                          </div>
                          <div className="form-group col-md-4 col-sm-12">
                            <button type="submit" className="btn btn-success">Search</button>
                          </div>
                        </div>
                      </form>
                    </td>
                  </tr>
                  <tr className="job-entry highlighted">
                    <td style={{"width": "100px", "vertical-align": "middle"}}>
                      <a className="job-url text-center" href="https://crypto.jobs/jobs/operations-manager-at-unlockd">
                        <img src="imgs/XpiJSfTGiYuVhX11p3U8R47OBLlr9twUQNbTxM0K.png" alt="Unlockd" className="company-logo"/>
                      </a>
                    </td>
                    <td>
                      <a className="job-url" href="https://crypto.jobs/jobs/operations-manager-at-unlockd" itemprop="url">
                        <p className="job-title">Operations Manager</p>
                        <span>Unlockd</span>
                        <div style={{"margin-top": "4px;"}} className="hidden-xs">
                          <small>
                            <span>
                              💼 Operations
                            </span>
                            <span style={{"margin-left": "10px;"}}>
                              ⏰ Full Time
                            </span>
                            <span style={{"margin-left": "10px;"}}>
                              🌍 Remote
                            </span>
                            <span style={{"margin-left": "20px;"}}>
                              📌 <b className="text-danger">Sticky</b>
                            </span>
                          </small>
                        </div>
                      </a>
                    </td>
                    <td style={{"width": "150px", "vertical-align": "middle;"}}>
                      <small style={{"display": "inline-block", "margin-top": "6px;"}}>
                        <div>
                          <span itemprop="datePosted" datetime="2023-06-16" style={{"color": "#888;"}}>12 days ago</span>
                          <br/>
                            ✅ 47 applications
                        </div>
                      </small>
                    </td>
                  </tr>
                  <tr className="job-entry ">
                    <td style={{"width": "100px", "vertical-align": "middle"}}>
                      <a className="job-url text-center" href="https://crypto.jobs/jobs/ui-ux-designer-head-of-design-at-ether-fi">
                        <img src="imgs /ncJnroXT02yhaoed5LSaIOxcgw0ROqBVYdChJ1Of.png" alt="ether.fi" className="company-logo"/>
                      </a>
                    </td>
                    <td>
                      <a className="job-url" href="https://crypto.jobs/jobs/ui-ux-designer-head-of-design-at-ether-fi" itemprop="url">
                        <p className="job-title">UI/UX Designer, Head of Design</p>
                        <span>ether.fi</span>
                        <div style={{"margin-top": "4px;"}} className="hidden-xs">
                          <small>
                            <span>
                              💼 Design
                            </span>
                            <span style={{"margin-left": "10px;"}}>
                              ⏰ Full Time
                            </span>
                            <span style={{"margin-left": "10px;"}}>
                              🌍 Denver or Cayman Islands
                            </span>
                            <span style={{"margin-left": "20px;"}}>
                              📌 <b className="text-danger">Sticky</b>
                            </span>
                          </small>
                        </div>
                      </a>
                    </td>
                    <td style={{"width": "150px", "vertical-align": "middle;"}}>
                      <small style={{"display": "inline-block", "margin-top": "6px;"}}>
                        <div>
                          <span itemprop="datePosted" datetime="2023-06-01" style={{"color": "#888;"}}>26 days ago</span>
                          <br/>
                            🔥 53 applications
                        </div>
                      </small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <ul className="pagination" role="navigation">
                <li className="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
                  <span className="page-link" aria-hidden="true">&lsaquo;</span>
                </li>
                <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=2">2</a></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=3">3</a></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=4">4</a></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=5">5</a></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=6">6</a></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=7">7</a></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=8">8</a></li>
                <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=24">24</a></li>
                <li className="page-item"><a className="page-link" href="https://crypto.jobs?page=25">25</a></li>
                <li className="page-item">
                  <a className="page-link" href="https://crypto.jobs?page=2" rel="next" aria-label="Next &raquo;">&rsaquo;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 sidebar">
          <h4 style={{"margin-top": "30px", "margin-bottom": "10px"}}>🗞 Subscribe</h4>
          <p>Join 40,000+ crypto enthusiasts for weekly updates:</p>
          <div id="mc_embed_signup">
            <form action="//crypto.us16.list-manage.com/subscribe/post?u=23c3682c299e4d4b34b21b7d8&amp;id=eeb4769b03" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll" className="row">
                <div className="mc-field-group col-md-7 col-sm-12">
                  <input type="email"  name="EMAIL" className="required email form-control" id="mce-EMAIL" placeholder="Your email" 
                  style={{"width": "100%;"}}
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{"display":"none"}}></div>
                  <div className="response" id="mce-success-response" style={{"display":"none"}}></div>
                </div>
                {/* <div style={{"position": "absolute", "left": "-5000px;"}} aria-hidden="true"><input type="text" name="b_23c3682c299e4d4b34b21b7d8_eeb4769b03" tabindex="-1" /></div> */}
                <div className="clear col-md-5 col-sm-12 sidebar-button-box">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-danger"/>
                </div>
              </div>
            </form>
          </div>
          <h4 style={{"margin-top": "30px", "margin-bottom": "10px"}}>🔥 Follow</h4>
          <div>
            <a href="https://twitter.com/GetCryptoJobs" style={{"display": "inline-block"}} target="_blank">
              <img src="imgs/v2-twitter.png" alt="CryptoJobs Twitter" style={{"width": "48px", "height": "48px"}}/>
            </a>
            <a href="https://www.linkedin.com/company/crypto-jobs/" style={{"display": "inline-block;"}} target="_blank">
              <img src="imgs/v2-linkedin.png" alt="CryptoJobs LinkedIn" style={{"width": "48px", "height": "48px"}}/>
            </a>
            <a href="https://www.facebook.com/GetCryptoJobs/" style={{"display": "inline-block;"}} target="_blank">
              <img src="imgs/v2-facebook.png" alt="CryptoJobs Facebook" style={{"width": "48px", "height": "48px"}}/>
            </a>
          </div>
          <b style={{"margin": "20px 0 10px 0", "display": "inline-block"}}>
            CryptoJobs – the leading talent platform to get you from Web2 to Web3
          </b>
          <i style={{"margin-bottom": "10px", "display": "inline-block;"}}>
            Trusted by 2,500+ Web3 companies around the world
          </i>
          <div className="trusted-by">
            <div className="row" style={{"padding": "12px 0px;"}}>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/XpiJSfTGiYuVhX11p3U8R47OBLlr9twUQNbTxM0K.png" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/Vo1WMoS5Hpj6zSdpbU2sKgAqSEdBOyqVosIkAypC.jpeg" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/oxcCuuZ8Txtr8pCTJV17bLvl2VeTuJZ3cspozWnF.jpeg" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/uLLQhcNQJOB8hWsrVBCmZEWI9KsmXqUUVDbLDQca.png" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/jVioxY955R0weNwO3aKzWO5xRc6fifmHiPCaMwSC.jpeg" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/ncJnroXT02yhaoed5LSaIOxcgw0ROqBVYdChJ1Of.png" style={{"border-radius": "10px;"}} />
              </div>
            </div>
            <div className="row" style={{"padding": "12px 0px;"}}>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/d3MssAQskGPlntOXF2Pqy95YiB5cBTx6A95OsKr1.jpeg" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/sqSyi2PL7EPcfCdMQEMynQK0QHvXshJrt7OPW8pb.png" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/PwxKkn8vU6F3Oq7C4ADOH986uCwm3B6WQ7JIvloo.png" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/fKksZC3DG9hKMULudhk1IXwCuJ0B3QYvrXP6kjZN.png" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/b8xpa0JtFHrV2RkxlOBStoilcVRBnrkksjWXyrWW.jpeg" style={{"border-radius": "10px;"}} />
              </div>
              <div className="col-xs-2">
                <img className="img-responsive" src="imgs/88jmfH3ugucgNrWZs0ljap7CrtwXMrzhjjIePUdi.jpeg" style={{"border-radius": "10px;"}} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <span style={{"font-style":"italic", "margin-top": "12px", "display": "inline-block"}}>...and many more!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}