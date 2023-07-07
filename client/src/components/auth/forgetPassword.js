export default function () {
  return <>
    <div class="container-fluid">
      <div class="row main-content">
        <div class="col-md-8 col-md-offset-2 content-panel">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Reset Password</h3>
              <hr/>
                <form class="form-horizontal" method="POST" action="https://crypto.jobs/password/email">
                  <input type="hidden" name="_token" value="GNREDDwgmv9Jy4LEb2DJEuziM0UU5TtNDSNgnOBS"/>
                    <div class="form-group">
                      <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                      <div class="col-md-6">
                        <input id="email" type="email" class="form-control" name="email"  required/>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-6 col-md-offset-4">
                        <button type="submit" class="btn btn-success">
                          Send Password Reset Link
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