import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends Component {
  render() {
    const {
      firstNumber, operator, secondNumber, result,
    } = this.props;
    return (
      <div>
        <div>{firstNumber}</div>
        <div>{operator}</div>
        <div>{secondNumber}</div>
        <div>{result}</div>
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
  result: '0',
  firstNumber: '',
  operator: '',
  secondNumber: '',
};

export default Display;
