import React, { Component } from "react";
import Button from './Button'
import '../../App.css';

class Keypad extends Component {
  
  render() {
    return (
      <div className="keypad">
          <div className="block">
            <Button button={"AC"} id={"clear"} type={'clear'} />
            <Button button={"/"} id={"divide"} type={'operator'} display={this.props.display} />
          </div>
          <div className="block">
            <Button button={"7"} id={"seven"} value={'7'} type={'num'} />
            <Button button={"8"} id={"eight"} value={'8'} type={'num'} />
            <Button button={"9"} id={"nine"} value={'9'} type={'num'} />
            <Button button={"*"} id={"multiply"} type={'operator'} display={this.props.display} />
         </div>
         <div className="block">
            <Button button={"4"} id={"four"} value={'4'} type={'num'} />
            <Button button={"5"} id={"five"} value={'5'} type={'num'} />
            <Button button={"6"} id={"six"} value={'6'} type={'num'} />
            <Button button={"-"} id={"subtract"} display={this.props.display} type={'operator'} />
          </div>
          <div className="block">
            <Button button={"1"} id={"one"} value={'1'} type={'num'} />
            <Button button={"2"} id={"two"} value={'2'} type={'num'} />
            <Button button={"3"} id={"three"} value={'3'} type={'num'} />
            <Button button={"+"} id={"add"} display={this.props.display} type={'operator'} />
          </div>
          <div className="block">
            <Button button={"0"} id={"zero"} value={'0'} type={'num'} />
            <Button button={"."} id={"decimal"} value={'.'} display={this.props.display} type={'decimal'} />
            <Button button={"="} id={"equals"} display={this.props.display} type={'equals'} />
          </div>
      </div>
    );
  }
}

export default Keypad;