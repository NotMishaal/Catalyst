import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handlesSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      try {
        setError("");
        setLoading(true);
        await login(email, password);
        navigate("/");
      } catch {
        setError("Failed to sign in");
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
          <h2 className="text-center mb-4">Log In</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
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
            <div className="form-floating mb-3" id="password">
              <input
                type="password"
                ref={passwordRef}
                required
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              disabled={loading}
              className="w-100 btn btn-primary"
              type="submit"
            >
              Login
            </button>
          </form>
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
