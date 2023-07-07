export default function () {
  return <>
    <div class="modal fade modal-login" id="modal-global-login" tabindex="-1" role="dialog" data-backdrop="static" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <strong class="modal-title">Login</strong>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form global-login-form" method="POST">
              <input type="hidden" name="_token"
                value="AVHBpOJBvMDjWCtPE12QN7Ppr0XxIeJQ5qQFoeIc" />
              <div class="form-group">
                <label>E-Mail Address</label>
                <input type="email" class="form-control" name="email" required autofocus />
                <strong class="error error-email"> </strong>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" required />
                <strong class="error error-password"> </strong>
              </div>
              <div class="form-group" style="text-align: right;margin-top: 15px;">
                <p class="text-prompt">Don’t have an account? <a class="global-btn-modal-signup">Sign up</a></p>
                <button type="button" class="btn btn-success  global-btn-login">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}