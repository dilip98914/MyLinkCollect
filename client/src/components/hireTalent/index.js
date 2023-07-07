import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function () {
  return <>
    <div class="container-fluid">
      <div class="row main-content">
        <div class="col-md-8 col-md-offset-2 content-panel">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>🚀 Hire Talent</h3>
              <hr/>
                <div class="row">
                  <div class="col-md-12 column-option box">
                    <h4 class="text-center">Post a Job</h4>
                    <p>With each Job Ad:</p>
                    <ul class="bullet-list" style={{"list-style": "inside;"}}>
                      <li>🚀 Reach <b>250,000+</b> crypto professionals across <b>30+</b> LinkedIn, Discord, Reddit & Twitter channels.</li>
                      <li>🚨 Distributed on the <b>Google for Jobs</b> recruitment network within seconds</li>
                      <li>🔥 Published across <b>>20 partner channels</b> on LinkedIn, Discord, Reddit & Twitter.</li>
                      <li>📰 Emailed to <b>35,000+</b> newsletter subscribers</li>
                    </ul>
                    <div class="pricing">
                      <strong>Starting at $249. Plus Add-ons:</strong>
                      <ul class="bullet-list">
                        <li><input type="checkbox" class="item-price" name="itemprice" value="49" /> 🎨 Show my company logo beside my post (+$49) 2x MORE VIEWS HIGHLY RECOMMENDED</li>
                        <li><input type="checkbox" class="item-price" name="itemprice" value="49" /> 💡 Highlight in yellow (+$49) 2x MORE VIEWS HIGHLY RECOMMENDED</li>
                        <li><input type="checkbox" class="item-price" name="itemprice" value="99" /> 📌 Sticky for 1 day (+$99) 2x MORE VIEWS</li>
                        <li><input type="checkbox" class="item-price" name="itemprice" value="199" /> 📌 Sticky for 7 day (+$199) 6x MORE VIEWS</li>
                        <li><input type="checkbox" class="item-price" name="itemprice" value="299" /> 📌 Sticky for 30 day (+$299) 9x MORE VIEWS</li>
                      </ul>
                    </div>
                    <br/>
                      <div class="text-center">
                        <NavLink to="/company/create">
                          <button class="btn btn-success create-job-link">Post a Job at $<span class="total-price">249</span></button>
                        </NavLink>
                        <i style={{"display": "block","margin-top": "10px;"}}>Posting multiple jobs? <a 
                        style={{"color": "#002060", "text-decoration":"underline"}} href="/cdn-cgi/l/email-protection#6a191f1a1a05181e2a0918131a1e054400050819">Contact us</a> for bulk pricing.</i>
                      </div>
                  </div>
                  <div class="col-md-12 column-option box">
                    <h4 class="text-center">Access Talent Database</h4>
                    <p>With a Recruiter Plan:</p>
                    <ul class="bullet-list" style={{"list-style": "auto","margin-left": "0;"}}>
                      <li>🚀 Access updated talent database of <b>30,000+</b> crypto professionals</li>
                      <li>🕵️ Browse by <b>skills, location</b>, and many other details</li>
                      <li>📨 Get contact details and reach out <b>immediately</b></li>
                    </ul>
                    <br/>
                      <div class="text-center">
                        <button class="btn btn-success btn-modal-login">Subscribe for $249/month</button>
                        <i style={{"display": "block","margin-top": "10px;"}}>Add card in the next page. Cancel anytime.</i>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
}