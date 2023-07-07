export default function () {
  return <>
    <div class="container-fluid">
      <div class="row main-content">
        <div class="col-md-8 col-md-offset-2 content-panel">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Signup</h3>
              <hr/>
                <form class="form-horizontal" method="POST" action="https://crypto.jobs/register">
                  <input type="hidden" name="_token" value="ivzk6AOiCXznEQLXb04vS9czWXRYL5DAsU9IliPB"/>
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>What are you looking for?</label>
                        <select name="user_type" class="form-control" value required>
                          <option value>Select your Goal</option>
                          <option value="1">I’m looking for a job</option>
                          <option value="2">I’m looking to hire</option>
                          <option value="3">I just want to check out the website</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>First Name</label>
                        <input type="text" class="form-control" name="first_name"  required autofocus/>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>Last Name</label>
                        <input type="text" class="form-control" name="last_name"  required/>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>Email Address</label>
                        <input type="email" class="form-control" name="email"  autocomplete="username" required/>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" autocomplete="new-password" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" name="password_confirmation" autocomplete="new-password" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <label for="g-recaptcha" class="col-md-4 control-label"></label>
                        <script type="text/javascript">
                          {/* var RecaptchaOptions = {"curl_timeout":1,"curl_verify":true}; */}
                        </script>
                        <script src="js/api.js?render=onload"></script>
                        <div class="g-recaptcha" data-sitekey="6Le-hIUUAAAAAGajryNPiaiOzTn-WiE5N77m1LTH"></div>
                        <noscript>
                          <div style="width: 302px; height: 352px;">
                            <div style="width: 302px; height: 352px; position: relative;">
                              <div style="width: 302px; height: 352px; position: absolute;">
                                <iframe src="https://www.google.com/recaptcha/api/fallback?k=6Le-hIUUAAAAAGajryNPiaiOzTn-WiE5N77m1LTH"
                                  frameborder="0" scrolling="no"
                                  style="width: 302px; height:352px; border-style: none;">
                                </iframe>
                              </div>
                              <div style="width: 250px; height: 80px; position: absolute; border-style: none;
                  bottom: 21px; left: 25px; margin: 0; padding: 0; right: 25px;">
                                <textarea id="g-recaptcha-response" name="g-recaptcha-response"
                                  class="g-recaptcha-response"
                                  style="width: 250px; height: 80px; border: 1px solid #c1c1c1;
                         margin: 0; padding: 0; resize: none;"></textarea>
                              </div>
                            </div>
                          </div>
                        </noscript>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <button type="submit" class="btn btn-success">
                          Sign up
                        </button>
                      </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}