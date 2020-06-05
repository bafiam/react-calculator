import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    const { name, value, onClick } = this.props;
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        className={name}
        value={value}
        onClick={onClick.bind(null, value)}
      >
        {value}
      </button>
    );
  }
}
Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,

};
export default Button;
