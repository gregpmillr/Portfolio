import React, { Component } from 'react';
import Yosemite from "./images/yosemite.jpg";
import Self from "./images/self.jpg";
import Pfeiffer from "./images/pfeiffer.jpg";
import JuliaGreg from "./images/julia_greg.jpg";
import RockLookback from "./images/rock_lookback.jpg";
import WelcomeMessage from './WelcomeMessage';
import { CSSTransition } from 'react-transition-group'; // ES6

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      showImages: false,
    }
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  showImages = () => {
    this.setState({showImages: true});
  }

  render() {

    return (

      <section className="intro-images-container">

        <WelcomeMessage showImages={this.showImages} />

        <CSSTransition
          in={this.state.mounted && this.state.showImages}
          timeout={100}
          classNames="test-node">

          <>
            <div className="col col-left image-wrapper" key="1">
              <img src={JuliaGreg} alt="Unavailable"></img>
              <div className="after">Intro</div>
            </div>

            <div className="col image-wrapper" key="2">
            <img src={Yosemite} alt="Unavailable"></img>
              <div className="after">Code Samples</div>
            </div>

            <div className="col image-wrapper" key="3">
            <img src={Self} alt="Unavailable"></img>
              <div className="after">Blog</div>
            </div>

            <div className="col image-wrapper" key="4">
            <img src={RockLookback} alt="Unavailable"></img>
              <div className="after">Work & Education</div>
            </div>
          </>

        </CSSTransition>

      </section>

    )
  }
}

export default Home;
