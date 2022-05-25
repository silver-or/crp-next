export function Register() {
    return(<>
<h2 class="text-uppercase text-center mb-5">Create an account</h2>

<form>

  <div class="form-outline mb-4">
    <label class="form-label" for="form3Example1cg">Your Name</label>
    <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form3Example3cg">Your Email</label>
    <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
  </div>

  <div class="form-outline mb-4">
    <label class="form-label" for="form3Example4cg">Password</label>
    <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
  </div>

  <div class="form-outline mb-4">
  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
    <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
  </div>

  <div class="form-check d-flex justify-content-center mb-5">
    <input class="form-check-input me-2"    type="checkbox" value="" id="form2Example3cg" />
    <label class="form-check-label" for="form2Example3g">
      I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
    </label>
  </div>

  <div class="d-flex justify-content-center">
  <button type="button" class="btn btn-dark btn-block mb-4" style={{width: 600+"px"}}>Register</button>  
  </div>

  <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/user/login"
      class="fw-bold text-body"><u>Login here</u></a></p>

</form>
    </>)
   
}