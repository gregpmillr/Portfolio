import React, { Component} from "react";
import LinkedinIcon from './images/linkedin-icon.png';
import FacebookIcon from './images/facebook-icon.png';
import InstagramIcon from './images/instagram-icon.png';
import Home from './Home';
import "./index.css";

class App extends Component {
  render(){
    return(
      <>
        <header className="appHeader">
          <p>
            greg
          </p>

          <div>
            <img src={LinkedinIcon}
            alt="Unavailable"></img>
            <img src={FacebookIcon}
            alt="Unavailable"></img>
            <img src={InstagramIcon}
            alt="Unavailable"></img>
          </div>
        </header>
        <Home />
      </>
    );
  }
}

export default App;
