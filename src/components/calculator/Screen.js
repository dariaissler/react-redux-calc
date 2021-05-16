import React, { Component } from "react";
import '../../App.css';


class Display extends Component {

  render() {
    return (
      <div id="display" className="lcd-screen">
        {this.props.display}
      </div>
    );
  }
}

export default Display;