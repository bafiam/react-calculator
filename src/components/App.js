import React, { Component } from 'react';
import '../css/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNumber: '',
      operator: 'sign',
      secondNumber: '',
      action: '',
      results: '0',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    const ops = ['÷', '*', '-', '+'];
    const {
      firstNumber, operator, secondNumber, action, results,
    } = this.state;
    const actions = ['=', 'AC', '+/-', '%'];
    // set user input and view/display

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
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber !== '' && results !== '0' && ops.includes(value)) {
      this.setState({
        firstNumber: results,
        operator: value,
        secondNumber: '',
        action: '',
        results: '0',

      });
    }
    if (actions.includes(value)) {
      this.setState({
        action: value,
      });

      // calculate now when all values are set by user/provided

      const total = calculate(
        firstNumber,
        secondNumber,
        operator,
        action,
        results,
      );
      if (total.answer) {
        this.setState({
          firstNumber: total.firstNumber,
          operator: total.operator,
          secondNumber: total.secondNumber,
          action: '',
          results: total.answer,
        });
      }
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
