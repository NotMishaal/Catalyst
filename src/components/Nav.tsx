import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

function NavBar() {
  const [user] = useAuthState(auth);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="public\catalyst.svg" alt="Bootstrap" height={69} />
          </a>
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
              <a className="nav-link" aria-current="page" href="#">
                Investors
              </a>
              <a className="nav-link" href="#">
                Businesses
              </a>
              <a className="nav-link" href="#">
                Blog
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
            </div>
            <div className="navbar-nav">
              {user ? ( // user is logged in
                <>
                  <a className="nav-link" href="#">
                    {user.displayName}
                  </a>
                  <a className="btn btn-primary" href="#" role="button">
                    Sign Out
                  </a>
                </>
              ) : (
                // user isn't logged in
                <>
                  <a className="btn btn-secondary" href="#" role="button">
                    Log In
                  </a>
                  <a className="btn btn-primary" href="#" role="button">
                    Sign Up
                  </a>
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
