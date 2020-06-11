/* eslint-disable import/extensions */
import Big from 'big.js';
// eslint-disable-next-line consistent-return
const operate = (numberOne, numberTwo, operation) => {
  let a;
  let b;

  if (numberOne) {
    if (numberOne.includes('.') && numberOne.split('.').length - 1 === 1) {
      a = new Big(numberOne);
    } else if (
      numberOne.includes('.')
      && numberOne.split('.').length - 1 !== 1
    ) {
      return 'Math Error';
    } else {
      a = new Big(numberOne);
    }
  }

  if (numberTwo) {
    if (numberTwo.includes('.') && numberTwo.split('.').length - 1 === 1) {
      b = new Big(numberTwo);
    } else if (
      numberTwo.includes('.')
      && numberTwo.split('.').length - 1 !== 1
    ) {
      return 'Math Error';
    } else {
      b = new Big(numberTwo);
    }
  }

  if (operation === '%') {
    if (numberOne) {
      return a.mul(0.01).valueOf();
    }
  }
  if (operation === '-') {
    return a.minus(b).valueOf();
  }

  if (operation === '+') {
    return a.plus(b).valueOf();
  }

  if (operation === '*') {
    return a.mul(b).valueOf();
  }

  if (operation === '÷') {
    if (numberOne === '0' && numberTwo === '0') {
      return 'Math Error';
    }
    if (numberOne !== '0' && numberTwo === '0') {
      return 'Math Error';
    }

    return a.div(b).valueOf();
  }
};
export default operate;
