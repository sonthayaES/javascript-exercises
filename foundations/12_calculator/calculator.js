const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, currentNumber) =>{
    return total + currentNumber;
  },0);
};

const multiply = function(multipliers) {
  return multipliers.reduce((total, currentNumber) =>{
    return total * currentNumber;
  });
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(factorialNum) {
  if(factorialNum == 0){
    return 1;
  }
  let total = 1;
  for(let i = 1; i <= factorialNum; i++ ){
    total = total * i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
