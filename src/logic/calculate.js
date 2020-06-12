import operate from './operate';
/* eslint-disable no-param-reassign */
const calculate = (firstNumber, secondNumber, operator, action, results) => {
  let answer;
  if (action === '=') {
    if (firstNumber !== '' && operator === 'sign') {
      answer = firstNumber;
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber === '') {
      answer = 'Syntax Error';
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber !== '') {
      const calc = operate(firstNumber, secondNumber, operator);
      answer = calc;
    }
  } else if (action === 'AC') {
    if (firstNumber !== '' && operator === 'sign') {
      firstNumber = '';
      answer = '0';
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber === '') {
      const getfirstNumber = firstNumber;
      firstNumber = getfirstNumber;
      operator = 'sign';
      answer = '0';
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber !== '' && results === '0') {
      const getfirstNumber = firstNumber;
      firstNumber = getfirstNumber;

      const getoperator = operator;
      operator = getoperator;
      secondNumber = '';
      answer = '0';
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber !== '' && results !== 0) {
      firstNumber = '';
      operator = 'sign';
      secondNumber = '';
      answer = '0';
    }
  } else if (action === '%') {
    if (firstNumber !== '' && operator === 'sign' && secondNumber === '') {
      const calc = operate(firstNumber, secondNumber, operator = '%');
      firstNumber = calc;
      answer = calc;
      operator = 'sign';
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber !== '') {
      const copyOp = operator;
      const calc = operate(secondNumber, firstNumber, operator = '%');
      secondNumber = calc;
      operator = copyOp;
      answer = '0';
    }
  } else if (action === '+/-') {
    if (firstNumber !== '' && operator === 'sign') {
      const convert = firstNumber * -1;
      firstNumber = convert;
      answer = '0';
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber !== '' && results === '0') {
      const convert = secondNumber * -1;
      secondNumber = convert;
      answer = '0';
    } else if (firstNumber !== '' && operator !== 'sign' && secondNumber !== '' && results !== '0') {
      const convert = results * -1;
      answer = convert;
    }
  }

  return {
    answer, firstNumber, operator, secondNumber,
  };
};

export default calculate;
/* eslint-enable no-param-reassign */
