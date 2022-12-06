import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li key={1} className="nav-item">
                <Link
                  className="nav-link text-danger"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li key={2} className="nav-item">
                <Link className="nav-link text-danger" to="/admission">
                  Student Admission
                </Link>
              </li>
              <li key={3} className="nav-item">
                <Link className="nav-link text-danger" to="/applicants">
                  Applicants
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
