export default function () {
  return <>
    <div class="container-fluid">
      <div class="row main-content">
        <div class="col-md-8 col-md-offset-2 content-panel">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Login</h3>
              <hr/>
                <form class="form-horizontal" method="POST" action="/login">
                  <input type="hidden" name="_token"/>
                    <div class="form-group">
                      <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                      <div class="col-md-6">
                        <input id="email" type="email" class="form-control" name="email"  autofocus/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="password" class="col-md-4 control-label">Password</label>
                      <div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" required/>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-6 col-md-offset-4">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="remember"/> Remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-8 col-md-offset-4">
                        <button type="submit" class="btn btn-success">
                          Login
                        </button>
                        <a class="btn btn-link" href="/password/reset">
                          Forgot Your Password?
                        </a>
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