import React, { Component } from 'react'
import '../App.css';
import ButtonPanel from './ButtonPanel'


class App extends Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick(value) {
    console.log(value)
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">

        <ButtonPanel onClick={this.handleButtonClick}></ButtonPanel>

      </header>
    </div>
    )
  }
}

export default App;
