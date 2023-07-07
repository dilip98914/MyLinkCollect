export default function () {
  return <>

    <div class="modal fade modal-login" id="modal-global-signup" tabindex="-1" role="dialog" data-backdrop="static" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <strong class="modal-title">Sign up</strong>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form global-signup-form" method="POST">
              <input type="hidden" name="_token" value="AVHBpOJBvMDjWCtPE12QN7Ppr0XxIeJQ5qQFoeIc" />
              <div class="form-group">
                <label>*First Name</label>
                <input type="text" class="form-control" name="first_name" required autofocus />
                <strong class="error error-first_name"> </strong>
              </div>
              <div class="form-group">
                <label>*Last Name</label>
                <input type="text" class="form-control" name="last_name" required />
                <strong class="error error-last_name"> </strong>
              </div>
              <div class="form-group">
                <label>*Email Address</label>
                <input type="email" class="form-control" name="email" autocomplete="username" required />
                <strong class="error error-email"> </strong>
              </div>
              <div class="form-group">
                <label>*Password</label>
                <input type="password" class="form-control" name="password" autocomplete="new-password" required />
                <strong class="error error-password"> </strong>
              </div>
              <div class="form-group">
                <label>*Confirm Password</label>
                <input type="password" class="form-control" name="password_confirmation" autocomplete="new-password" required />
              </div>
              <div class="form-group" style="text-align: right;margin-top: 15px;">
                <p class="text-prompt">Already have an account? <a class="global-btn-modal-login">Log In</a></p>
                <button type="button" class="btn btn-success global-btn-register">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>
}