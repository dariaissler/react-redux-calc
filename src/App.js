import React, { Component } from "react";
import { connect } from "react-redux";
import Screen from "./components/calculator/Screen";
import Keypad from "./components/calculator/Keypad";
import './App'
class Calculator extends Component {

  render() {
    return (
      <div className="calculator-body">
        <div>
          <Screen
            display={this.props.display}
          />
        </div>
        <div>
          <Keypad
            display={this.props.display}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    display: state.display,
  });
};

export default connect(
  mapStateToProps,
  null
)(Calculator);

