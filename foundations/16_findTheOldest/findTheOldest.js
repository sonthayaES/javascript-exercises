const findTheOldest = function(peopleArr) {
    const oldestPerson = peopleArr.reduce((champion, challenger) =>{
        const currentYear = new Date().getFullYear();
        let championAge;
        if(champion.yearOfDeath){
            championAge = champion.yearOfDeath - champion.yearOfBirth
        }
        else{
            championAge = currentYear - champion.yearOfBirth;
        }
        
        let challengerAge;
        if(challenger.yearOfDeath){
            challengerAge = challenger.yearOfDeath - challenger.yearOfBirth
        }
        else{
            challengerAge = currentYear - challengerAge.yearOfBirth;
        }

        if(championAge > challengerAge){
            return champion;
        }else{
            return challenger;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
