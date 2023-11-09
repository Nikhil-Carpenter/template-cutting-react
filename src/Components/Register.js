// import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      <section className="contact_section layout_padding">
        <div className="container px-0">
          <div className="heading_container ">
            <h2 className="">Register Here !</h2>
          </div>
        </div>
        <div className="container container-bg">
          <div className="row">
            <div className="col-md-12">
              <form>
              <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
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
                <div className="form-group">
                 <select className="form-control">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>

                 </select>
                </div>
                <div className="d-flex form-group">
                  <button type="submit" className="btn btn-danger form-control">
                    Register
                  </button>
                </div>
                {/* <div>
                  <span>
                    If you have not register ? &nbsp;&nbsp;
                    <Link to="/register">Click Here </Link>
                  </span>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Register;
