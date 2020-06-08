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

  value: PropTypes.string,

  name: PropTypes.string,

  onClick: PropTypes.func,

};
Button.defaultProps = {

  value: '',

  name: 'button',

  onClick: () => {},

};
export default Button;
