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

        <article className="images-container">
          <div className="col image-wrapper" style={{marginLeft:"0px"}} key="4">
            <p>Blog</p>
            <div className="after green" />
          </div>

          <div className="col image-wrapper" key="4">
            <p>Blog</p>
            <div className="after orange" />
          </div>

          <div className="col image-wrapper" key="4">
            <p>Code Samples</p>
            <div className="after blue" />
          </div>
        </article>

      </section>
    )
  }
}

export default Home;
