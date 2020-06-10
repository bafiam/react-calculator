import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let a;
  let b;

  if (numberOne) {
    a = new Big(numberOne);
  }

  if (numberTwo) {
    b = new Big(numberTwo);
  }

  if (operation === '%') {
    if (numberOne) {
      return a.mul(0.01).valueOf();
    }
    if (numberTwo) {
      return b.mul(0.01).valueOf();
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
    if (numberOne === '0' || numberTwo === '0'){
      return 'NaN';
    }else{
      return a.div(b).valueOf()
    }
    
  }
  


}
export default operate
