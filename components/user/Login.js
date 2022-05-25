export function Login() {
    return(<>
    <div style={{width:600+"px"}}>
    <form>

    <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Email address</label>
        <input type="email" id="form2Example1" class="form-control" />
    </div>


    <div class="form-outline mb-4">
    <label class="form-label" for="form2Example2">Password</label>
        <input type="password" id="form2Example2" class="form-control" />
    </div>


    <div class="row mb-4">
        <div class="col d-flex justify-content-center">
        <div class  ="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
        </div>

        <div class="col">

        <a href="#!">Forgot password?</a>
        </div>
    </div>


    <button type="button" class="btn btn-dark btn-block mb-4" style={{width: 600+"px"}}>Sign in</button>

    
    <div class="text-center">
        <p>Not a member? <a href="/user/register">Register</a></p>
        <p>or sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fa fa-facebook"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fa fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fa fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fa fa-github"></i>
        </button>
    </div>
</form> 
    </div>
    </>)
}