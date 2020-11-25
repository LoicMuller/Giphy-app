import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

const Register = ({ setLoggedIn }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const signUp = (e, email, password) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });

    setEmail("");
    setPassword("");
    setConfirmPass("");
    setUsername("");
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPass(value);
    } else if (name === "username") {
      setUsername(value);
    }
  };

  const signUpBtn =
    password !== confirmPass ? (
      <button disabled className="btn">
        Create account
      </button>
    ) : (
      <button className="btn">Create account</button>
    );

  return (
    <div className="auth-container register">
      <h1 className="__title">Sign up to GIPHY</h1>
      {error !== null && <div>{error}</div>}
      <form
        className="__auth-form"
        onSubmit={(e) => signUp(e, email, password, confirmPass)}
      >
        <div className="flex fd_col">
          <label htmlFor="username">Username</label>
          <input
            className="input"
            name="username"
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => handleChange(e)}
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
            value={email}
            onChange={(e) => handleChange(e)}
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
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex fd_col">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            className="input"
            name="confirmPassword"
            id="confirm-password"
            type="password"
            required
            value={confirmPass}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {signUpBtn}
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
