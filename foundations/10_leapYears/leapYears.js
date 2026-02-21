const leapYears = function(year) {
    if((normalLeapYear(year)) || (centuryLeap(year))){
        return true;
    }
    else{
        return false;
    }
    
};
const normalLeapYear = (year) =>{
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }else{
        return false;
    }
}

const centuryLeap = (year) =>{
    if(year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
