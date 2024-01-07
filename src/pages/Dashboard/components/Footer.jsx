import { Link } from "react-router-dom";
import "../css/Dashboard.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
