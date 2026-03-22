const palindromes = function (words) {
    let lowerWord = words.toLowerCase();
    const pureString = lowerWord.replace(/[^a-z0-9]/g, '')
    let reverseString = pureString.split('').reverse().join('');
    if(reverseString == pureString){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
