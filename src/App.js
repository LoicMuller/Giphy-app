// IMPORT DEPENDENCIES
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Home from "./components/Home";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import PasswordReset from "./components/Authentication/PasswordReset";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className="app__container">
        <Switch>
          {loggedIn ? (
            <Route exact path="/" component={Welcome} />
          ) : (
            <Route exact path="/" component={Home} />
          )}
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/signup">
            <Register setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/password_reset" component={PasswordReset} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
