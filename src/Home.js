import React, { Component } from 'react';
import Yosemite from "./images/yosemite.jpg";
import Self from "./images/self.jpg";
import Coding from "./images/coding.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    }
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  render() {

    return (
      <section className="intro-images-container">

        <header className="welcomeHeader">
          <h1>
            Greg Miller
          </h1>
          <h2>
            Web Developer
          </h2>
        </header>

        <article>
          <div className="col image-wrapper" style={{marginLeft:"0px"}} key="4">
            <div className="after green" />
            <img src={Coding} alt="Unavailable"></img>
            <div className="after-bottom-message bottom-green"><span>Blog</span></div>
          </div>

          <div className="col image-wrapper" key="4">
            <div className="after orange" />
            <img src={Coding} alt="Unavailable"></img>
            <div className="after-bottom-message bottom-orange"><span>Blog</span></div>
          </div>

          <div className="col image-wrapper" key="4">
            <div className="after blue" />
            <img src={Coding} alt="Unavailable"></img>
            <div className="after-bottom-message bottom-blue"><span>Code Samples</span></div>
          </div>
        </article>

      </section>
    )
  }
}

export default Home;
