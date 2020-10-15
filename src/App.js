import React from "react";
import { Home } from './Home';
import HomeV2 from './HomeV2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./index.css";

export default function App() {
  return(
    <Router>      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/v2" component={HomeV2} />
      </Switch>
    </Router>
  );
}