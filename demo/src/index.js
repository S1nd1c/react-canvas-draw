import React, { Component } from "react";
import { render } from "react-dom";

import CanvasDraw from "../../src";
import classNames from "./index.css";

class Demo extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12
  };
  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <h1>React Canvas Draw</h1>
        <iframe
          title="GitHub link"
          src="https://ghbtns.com/github-btn.html?user=embiem&repo=react-canvas-draw&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        />
        <h2>default</h2>
        <p>
          This is a simple <span>{`<CanvasDraw />`}</span> component with
          default values.
        </p>
        <p>Try it out! Draw on this white canvas:</p>
        <CanvasDraw onChange={() => console.log("onChange")} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
