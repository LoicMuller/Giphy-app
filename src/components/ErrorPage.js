import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>This page doesn't exist</h1>
      <p>
        <Link to="/">Click here</Link> to go home
      </p>
    </div>
  );
};

export default ErrorPage;
