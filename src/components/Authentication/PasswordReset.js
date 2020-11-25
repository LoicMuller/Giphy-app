import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

const PasswordReset = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    if (name === "password_reset") {
      setEmail(value);
    }
  };

  const sendResetEmail = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="password-reset auth-container">
      <h1 className="__title">Reset your password</h1>
      {emailHasBeenSent && (
        <div className="success-container">
          An email has been sent to <strong>{email}</strong>
        </div>
      )}
      {error !== null && <div className="error-container">{error}</div>}
      <form className="__auth-form" onSubmit={(e) => sendResetEmail(e)}>
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
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn">Send password reset email</button>
      </form>
    </div>
  );
};

export default PasswordReset;
