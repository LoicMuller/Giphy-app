import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-container register">
      <h1 className="__title">Sign up to GIPHY</h1>
      <form className="__auth-form">
        <div className="flex fd_col">
          <label htmlFor="username">Username</label>
          <input
            className="input"
            name="username"
            id="username"
            type="text"
            required
          />
        </div>
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
        <div className="flex fd_col">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            className="input"
            name="confirm-password"
            id="confirm-password"
            type="password"
            required
          />
        </div>
        <button className="btn">Create account</button>
      </form>
      <div className="__redirect">
        <p>
          Already have an account ? <Link to="/login">Sign In</Link>.
        </p>
      </div>
    </div>
  );
};

export default Register;
