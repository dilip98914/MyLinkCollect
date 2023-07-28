export default function () {
  return <>
    <div class="container-fluid">
      <div class="row main-content">
        <div class="col-md-8 col-md-offset-2 content-panel">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Reset Password</h3>
              <hr />
              <form class="form-horizontal" method="POST"
              // action="https://crypto.jobs/password/reset"
              >
                <input type="hidden" name="_token" value="0Q30hkSNcSDOfPH4L77r2mFibnmZoIQFKVUlxnmV" />
                <input type="hidden" name="token" value="b2b274b6cef331bd09196e345d454dd29fb1dc0aea40b84f92d9746b8091717c" />
                <div class="form-group">
                  <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                  <div class="col-md-6">
                    <input id="email" type="email" class="form-control" name="email" required autofocus />
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="col-md-4 control-label">Password</label>
                  <div class="col-md-6">
                    <input id="password" type="password" class="form-control" name="password" required />
                  </div>
                </div>
                <div class="form-group">
                  <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>
                  <div class="col-md-6">
                    <input id="password-confirm" type="password" class="form-control"
                      name="password_confirmation" required />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-6 col-md-offset-4">
                    <button type="submit" class="btn btn-success">
                      Reset Password
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