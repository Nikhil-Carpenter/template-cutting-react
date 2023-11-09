import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <section className="contact_section layout_padding">
        <div className="container px-0">
          <div className="heading_container ">
            <h2 className="">Login Here !</h2>
          </div>
        </div>
        <div className="container container-bg">
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="d-flex form-group">
                  <button type="submit" className="btn btn-danger form-control">
                    Login
                  </button>
                </div>
                <div>
                  <span>
                    If you have not register ? &nbsp;&nbsp;
                    <Link to="/register">Click Here </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
