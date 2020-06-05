import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string
  }

  render() {
    return (
    <button className = {this.props.name} value= {this.props.value}>{this.props.value}</button>
    )
  }
}
export default Button 