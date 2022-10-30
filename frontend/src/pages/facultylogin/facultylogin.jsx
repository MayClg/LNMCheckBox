import logo from "./images/logo.jpg"
import "./facultylogin.css";

const FacultyLogin = () => {
  return (
    <div className="body">
      <main className="form-signin w-100 m-auto text-center">
        <form data-bitwarden-watching="1" method="post" action="/">
          <img
            className="mb-4"
            src={logo}
            alt=""
            width="216"
            height="171"
          />
          <h1 className="h3 mb-3 fw-normal">Login As : Faculty</h1>

          <div className="form-floating">
            <input
              type="text"
              name="fName"
              className="form-control top"
              id="floatingInput"
              placeholder="First Name"
            />
            <label for="floatingInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="lName"
              className="form-control middle"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label for="floatingPassword">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control bottom"
              id="floatingInput"
              placeholder="example@mail.com"
            />
            <label for="floatingPassword">Email</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign Up
          </button>
          <p className="mt-5 mb-3 text-muted">© LNMCheckBox</p>
        </form>
      </main>
    </div>
  );
};

export default FacultyLogin;
