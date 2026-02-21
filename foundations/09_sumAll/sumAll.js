const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let maxEdge = Math.max(num1, num2);
    let minEdge = Math.min(num1, num2);

    let finalSum = 0;
        for(let i = maxEdge; i >= minEdge; i--){
            finalSum += i;
        }
        return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
