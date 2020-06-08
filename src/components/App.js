import React, { Component } from 'react';
import '../css/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNumber: '',
      operator: 'sign',
      secondNumber: '',
      // action: '0',
      results: '0',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    const ops = ['÷', '*', '-', '+', '%'];
    const { firstNumber, operator, secondNumber } = this.state;

    if (numbers.includes(value) && operator === 'sign') {
      this.setState({
        firstNumber: firstNumber.concat(value),
      });
    } else if (
      numbers.includes(value)
      && firstNumber !== ''
      && operator !== 'sign'
    ) {
      this.setState({
        secondNumber: secondNumber.concat(value),
      });
    } else if (
      ops.includes(value)
      && operator === 'sign'
      && firstNumber !== ''
    ) {
      this.setState({
        operator: value,
      });
    }
  }

  render() {
    const {
      firstNumber, operator, secondNumber, results,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <div className="calculator">
          <Display
            firstNumber={firstNumber}
            operator={operator}
            secondNumber={secondNumber}
            result={results}
          />
          <ButtonPanel onClick={this.handleButtonClick} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
