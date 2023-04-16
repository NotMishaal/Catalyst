import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlesSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    if (email && password) {
      try {
        setError("");
        setLoading(true);
        await signup(email, password);
      } catch {
        setError("Failed to create an account");
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
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <div className="form-floating mb-3" id="passwordConfirm">
              <input
                type="password"
                ref={passwordConfirmRef}
                required
                className="form-control"
                id="floatingPasswordConfirm"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordConfirm">Confrim Password</label>
            </div>
            <button
              disabled={loading}
              className="w-100 btn btn-primary"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="w-100 text-center m-2">
          <Link to="/login" className="nav-link">
            Already Have an Account? Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
