import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'; // ES6

class WelcomeMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      hide: false
    };
  }



  componentDidMount() {
    this.setState({mounted: true});
    setTimeout(() => {
      this.setState({hide: true});
    }, 6000);
  }

  render() {
    return (
      <CSSTransition
        in={this.state.mounted && !this.state.hide}
        timeout={1000}
        classNames="welcome-message"
        onExited={() => this.props.showImages()}>
        <div>
          <h1>
            Hey, {`I'm Greg`}, a full stack software developer based in
            Halifax, NS.
          </h1>
          <h2>
            {`Here's my portfolio.`}
          </h2>
        </div>
      </CSSTransition>
    )
  }
}

export default WelcomeMessage;
