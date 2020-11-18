import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import LoggedInHeader from "./components/LoggedInHeader";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      {loggedIn ? (
        <LoggedInHeader setLoggedIn={setLoggedIn} />
      ) : (
        <Header setLoggedIn={setLoggedIn} />
      )}
      <Switch>
        {loggedIn ? (
          <Route exact path="/" component={Welcome} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
      </Switch>
    </Router>
  );
};

export default App;
