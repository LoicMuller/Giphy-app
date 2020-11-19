import React from "react";

const PasswordReset = () => {
  return (
    <div className="password-reset auth-container">
      <h1 className="__title">Reset your password</h1>
      <form className="__auth-form">
        <div className="flex fd_col">
          <label htmlFor="password_reset">
            Enter your user account's email address and you will receive a
            password reset link.
          </label>
          <input
            placeholder="Enter your email address"
            className="input"
            name="password_reset"
            id="password_reset"
            type="email"
            required
          />
        </div>
        <button className="btn">Send password reset email</button>
      </form>
    </div>
  );
};

export default PasswordReset;
