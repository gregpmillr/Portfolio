import React from "react";
import Home from './Home';
import Blog from './Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from "./Admin";
import "./index.css";

export default function App() {
  return(
    <Router>      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}