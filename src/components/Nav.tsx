import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";

function NavBar() {
  const [user] = useAuthState(auth);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="public\catalyst.svg" alt="Bootstrap" height={69} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-link">
                Investors
              </Link>
              <Link to="/" className="nav-link">
                Businesses
              </Link>
              <Link to="/" className="nav-link">
                Blog
              </Link>
              <Link to="/" className="nav-link">
                Pricing
              </Link>
            </div>
            <div className="navbar-nav">
              {user ? ( // user is logged in
                <>
                  <Link to="/" className="nav-link">
                    {user.displayName}
                  </Link>
                  <Link to="/" className="btn btn-primary" role="button">
                    Sign Out
                  </Link>
                </>
              ) : (
                // user isn't logged in
                <>
                  <Link
                    to="/login"
                    className="btn btn-secondary m-2"
                    role="button"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signUp"
                    className="btn btn-primary m-2"
                    role="button"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
