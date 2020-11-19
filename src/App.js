// IMPORT DEPENDENCIES
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Home from "./components/Home";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import LoggedInHeader from "./components/LoggedInHeader";
import Login from "./components/Login";
import Register from "./components/Register";
import PasswordReset from "./components/PasswordReset";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      {loggedIn ? (
        <LoggedInHeader setLoggedIn={setLoggedIn} />
      ) : (
        <Header setLoggedIn={setLoggedIn} />
      )}
      <div className="app__container">
        <Switch>
          {loggedIn ? (
            <Route exact path="/" component={Welcome} />
          ) : (
            <Route exact path="/" component={Home} />
          )}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/password_reset" component={PasswordReset} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
