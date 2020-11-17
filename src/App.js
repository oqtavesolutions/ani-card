import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import luffyImage from "./assets/images/luffy.png";
import Homepage from "./pages/Homepage/Homepage";
import CardPage from "./pages/CardPage/CardPage";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="container__image-container">
          <img src={luffyImage} alt="Luffy" className="container__image" />
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/card" component={CardPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
