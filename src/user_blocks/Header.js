import { Link } from "react-router-dom";

function Header(){
    return<>
    <header className="header_section">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <Link className="navbar-brand" to="/">
          <span>
            React Shop
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/why">
                Why Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonial">
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="user_option">
            <Link to="/login">
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>
                Login
              </span>
            </Link>
            <Link to="">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </Link>
            <form className="form-inline ">
              <button className="btn nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    </>
}

export default Header;