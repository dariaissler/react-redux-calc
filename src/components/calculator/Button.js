import React, { Component } from "react";
import { connect } from "react-redux";
import { add, substract, devide, multiply, update, equal, clear} from '../../store/actions/calculate'


class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClicks = this.handleClicks.bind(this);
  }
  handleClicks(e) {
    if (this.props.id === "clear") {
      this.props.clear();
    } else if (this.props.id === "subtract") {
      this.props.subtract(this.props.display);
    } else if (this.props.id === "multiply") {
      this.props.multiply(this.props.display);
    } else if (this.props.id === "divide") {
      this.props.divide(this.props.display);
    } else if (this.props.id === "add") {
      this.props.add(this.props.button)
    } else if (this.props.id === "equals") {
        this.props.equal(this.props.display);
    }else {
      this.props.update(this.props.button);
    }
  }

  render() {
    return (
      <button
        id={this.props.id}
        value={this.props.value}
        onClick={this.handleClicks}
      >
        {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  update: display => dispatch(update(display)),
  subtract: display => dispatch(substract(display)),
  multiply: display => dispatch(multiply(display)),
  divide: display => dispatch(devide(display)),
  clear: display => dispatch(clear(display)),
  add: display => dispatch(add(display)),
  equal: display => dispatch(equal(display))
});



export default connect(
  null,
  mapDispatchToProps
)(Button);