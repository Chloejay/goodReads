import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import MusicBox from "./musicBar";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1><MusicBox /></h1>
      </div>
    );
  }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);