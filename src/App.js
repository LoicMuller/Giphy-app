import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loading ? <Home /> : <Landing />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
