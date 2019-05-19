import React, { Component } from "react";

const numberFormatter = Intl.NumberFormat("nl");

class WindowSize extends Component {
  state = {
    height: 400,
    width: 800
  };

  getWindowSize = () => {
    this.setState({
      height: window.outerHeight,
      width: window.outerWidth
    });
  };

  componentDidMount() {
    this.getWindowSize();

    window.addEventListener("resize", this.getWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getWindowSize);
  }

  render() {
    const { height, width } = this.state;

    return (
      <div>
        <h1>Window Size</h1>
        <div>
          <label>Height:</label>
          <input
            type="number"
            value={height}
            onChange={e => this.setState({ height: e.target.value })}
            autoFocus
          />
        </div>
        <div>
          <label>Width:</label>
          <input
            type="number"
            value={width}
            onChange={e => this.setState({ width: e.target.value })}
          />
        </div>
        <div>
          <label>Area:</label>
          <input disabled value={numberFormatter.format(height * width)} />
        </div>
      </div>
    );
  }
}

export default WindowSize;
