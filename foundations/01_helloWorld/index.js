// 1. Function that adds two numbers
/*function sumOfTwo(num1, num2){
    return num1 + num2;
}

let result = sumOfTwo(4,5);
console.log(result);
*/

// 2. Function that finds larger of two numbers
/*function whichIsLarger(input1, input2){
    if(input1 > input2){
        return input1;
    }else if(input2 > input1){
        return input2;
    }else{
        return "It's a tie";
    }
}

let input1 = Number(prompt("Enter first num: "));
let input2 = Number(prompt("Enter second num: "));
let result = (whichIsLarger(input1,input2));
console.log(result);
*/

// 3. Function that checks if number is even
/*function isEven(num){
    if(num %2 === 0){
        return `${num} is Even`;
    }else{
        return `${num} is ODD`;
    }
}

let input = Number(prompt("Please enter a num: "));
let result = (isEven(input));
console.log(result);
*/

// 4. Function that reverses a string
/*function strReverser(str){
    let reversed = str.split('').reverse().join('');
    return reversed;
}

let input = prompt("Type some thing: ");
let reversed = strReverser(input);
console.log(reversed);
*/

// 5. Function that counts vowels in a string
function vowelCounter(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let letters = str.split('');

    for(let i = 0; i < letters.length; i++){
        if(vowels.includes(letters[i])){
            count++;
        }
    }
    return count;
}

let input = prompt("Please say something: ");
let result = vowelCounter(input.toLocaleLowerCase());

console.log(`Total vowel: ${result}`);



