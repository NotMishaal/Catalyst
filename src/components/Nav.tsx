import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";

export default function NavBar() {
  const [user] = useAuthState(auth);
  const [error, setError] = useState("");
  const { logout } = useAuth();

  async function handleLogout() {
    setError("");
    try {
      await logout();
    } catch {
      setError("Failed to logout");
    }
  }

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
                    Account
                  </Link>
                  <button className="btn btn-primary" onClick={handleLogout}>
                    Sign Out
                  </button>
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
