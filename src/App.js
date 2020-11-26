// IMPORT DEPENDENCIES
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Firebase/firebase";

// IMPORT COMPONENTS
import Home from "./components/Home";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import PasswordReset from "./components/Authentication/PasswordReset";
import Collection from "./containers/Collection";
import Trendings from "./components/Trendings";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [firebaseProcess, setFirebaseProcess] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setFirebaseProcess(false);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setLoggedIn(false);
        setFirebaseProcess(false);
        localStorage.removeItem("user");
      }
    });
  }, []);

  if (firebaseProcess) {
    return <div>Loading...</div>;
  }

  const loggedInComponents = loggedIn ? (
    <>
      <Route exact path="/" component={Welcome} />
      <Route path="/collection" component={Collection} />
      <Route path="/trends" component={Trendings} />
    </>
  ) : (
    <Route exact path="/" component={Home} />
  );

  return (
    <Router>
      <Header loggedIn={loggedIn} />
      <div className="app__container">
        <Switch>
          {loggedInComponents}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/password_reset" component={PasswordReset} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
