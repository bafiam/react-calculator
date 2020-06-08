import React, { Component } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prefer-stateless-function
class Display extends Component {
  render() {
    const { firstNumber, operator, secondNumber, result } = this.props;
    return (
      <div className="display">
        <div className="displayDivs">{firstNumber}</div>
        <div className="displayDivs ft-r">{operator}</div>
        <div className="displayDivs">{secondNumber}</div>
        <div className="displayDivs ft-r ">{result}</div>
      </div>
    );
  }
}
Display.propTypes = {
  result: PropTypes.string,
  firstNumber: PropTypes.string,
  operator: PropTypes.string,
  secondNumber: PropTypes.string,
};

Display.defaultProps = {
  result: "0",
  firstNumber: "",
  operator: "",
  secondNumber: "",
};

export default Display;
