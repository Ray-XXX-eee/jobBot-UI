import "../css/Dashboard.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerContainer">
      <header className="cust-header p-3 text-bg-dark">
        <div className=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>

          <div className="cust-flex-0">
            <div className="cust-flex-1">
              <ul className="cust-header-ul nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="#" className="nav-link px-2 text-secondary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-2 text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-2 text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-2 text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-2 text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="cust-flex-2">
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
              </form>

              <Link to="/login" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
              </Link>

              <Link to="/register" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <button type="button" className="btn btn-outline-light me-2">
                  Sign-up
                </button>
              </Link>

              <Link to="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
