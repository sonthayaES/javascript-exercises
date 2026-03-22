const fibonacci = function(num) {
    let fibo = parseInt(num);
    if(fibo < 0){
        return "OOPS"
    }
    if(fibo === 0){
        return 0;
    }

    let fiboArr = [0,1];
    for(let i = 2; i <= fibo; i++){
        let nextNum = fiboArr[i - 1] + fiboArr[i -2];

        fiboArr.push(nextNum);

    }
    return fiboArr[fibo];
}
    

// Do not edit below this line
module.exports = fibonacci;
