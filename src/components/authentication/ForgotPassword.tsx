import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlesSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const email = emailRef.current?.value;

    if (email) {
      try {
        setError("");
        setMessage("");
        setLoading(true);
        await resetPassword(email);
        setMessage("Check your email for further instructions.");
      } catch {
        setError("Failed to reset password");
      }
      setLoading(false);
    }
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card w-100" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {message && (
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          )}
          <form onSubmit={handlesSubmit}>
            <div className="form-floating mb-3" id="email">
              <input
                type="email"
                ref={emailRef}
                required
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <button
              disabled={loading}
              className="w-100 btn btn-primary"
              type="submit"
            >
              Reset Password
            </button>
          </form>
          <div className="text-end m-2">
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="w-100 text-center m-2">
          Don't have an account?
          <Link to="/signUp" className="nav-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
