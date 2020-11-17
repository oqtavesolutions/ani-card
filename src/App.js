import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
