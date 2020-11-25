import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

const Login = ({ setLoggedIn }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signIn = (e, email, password) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });

    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="__title">Sign in to GIPHY</h1>
      {error !== null && <div className="error-container">{error}</div>}
      <form
        className="__auth-form"
        onSubmit={(e) => signIn(e, email, password)}
      >
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
