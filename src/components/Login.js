import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <h1 className="__title">Sign in to GIPHY</h1>
      <form className="__auth-form">
        <div className="flex fd_col">
          <label htmlFor="email">Email address</label>
          <input
            className="input"
            name="email"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="flex fd_col">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            name="password"
            id="password"
            type="password"
            required
          />
        </div>
        <button className="btn">Sign In</button>
      </form>
      <div className="__redirect">
        <p>
          New to GIPHY ? <Link to="/signup">Create an account</Link>.
        </p>
      </div>
      <div className="__redirect-password-reset">
        <Link to="/password_reset">Forgot password?</Link>
      </div>
    </div>
  );
};

export default Login;
