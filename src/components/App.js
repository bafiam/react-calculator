import React, { Component } from 'react'
import '../App.css';
import ButtonPanel from './ButtonPanel'
import Display from './Display'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       results: "0"
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  
  handleButtonClick(value) {
    console.log(value)
    this.setState({
      results:value
    })
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Display results ={this.state.results}></Display>

        <ButtonPanel onClick={this.handleButtonClick}></ButtonPanel>

      </header>
    </div>
    )
  }
}

export default App;
