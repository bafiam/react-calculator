import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Display extends Component {
  static propTypes = {
    results: PropTypes.string
  }
  static defaultProps = {
    results: '0'
  }

  render() {
    return (
      <div>
        {this.props.results}
      </div>
    )
  }
}

export default Display
