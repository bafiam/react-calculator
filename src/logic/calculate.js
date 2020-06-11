import operate from './operate'
const calculate = (firstNumber,secondNumber,operator, action, results) => {
  let answer;
  if (action === "=") {
    if (firstNumber !== "" && operator === "sign") {
      answer = firstNumber
      
    }else if (firstNumber !== "" && operator !== "sign" && secondNumber === ""){
      answer = "Syntax Error"
    }else if (firstNumber !== "" && operator !== "sign" && secondNumber !== ""){
      let calc = operate(firstNumber, secondNumber, operator)
      answer = calc
    }
     
  }else if (action === "AC"){
    if (firstNumber !== "" && operator === "sign") {
      firstNumber = ""
      answer = "0"  
    }else if(firstNumber !== "" && operator !== "sign" && secondNumber === ""){
      // eslint-disable-next-line no-self-assign
      firstNumber = firstNumber
      operator = "sign"
      answer = "0"

    }else if (firstNumber !== "" && operator !== "sign" && secondNumber !== "" && results === "0"){
      // eslint-disable-next-line no-self-assign
      firstNumber = firstNumber
      // eslint-disable-next-line no-self-assign
      operator = operator
      secondNumber = ""
      answer = "0"

    }else if (firstNumber !== "" && operator !== "sign" && secondNumber !== "" && results !== 0){
      firstNumber = ""
      operator = "sign"
      secondNumber = ""
      answer = "0"

    }

  } else if (action === "%"){
    if (firstNumber !== "" && operator === "sign" && secondNumber === "" ){
      let calc = operate(firstNumber, secondNumber, operator = "%")
      firstNumber = calc
      answer = calc
      operator = "sign"
      
    }else if (firstNumber !== "" && operator !== "sign" && secondNumber !== ""){
      let copyOp = operator
      let calc = operate(secondNumber,firstNumber,  operator = "%")
      secondNumber = calc
      operator = copyOp
      answer = "0"
    }
  }else if (action === "+/-"){
    if (firstNumber !== "" && operator === "sign"){
      let convert = firstNumber * -1
      firstNumber = convert
      answer = "0"
    }else if (firstNumber !== "" && operator !== "sign" && secondNumber !== "" && results === "0"){
    let convert = secondNumber * -1
    secondNumber = convert
    answer = "0"
    } else if (firstNumber !== "" && operator !== "sign" && secondNumber !== "" && results !== "0"){
      let convert = results * -1
      answer = convert
    }



  }
  
  return {answer,firstNumber, operator, secondNumber}
  


};

export default calculate