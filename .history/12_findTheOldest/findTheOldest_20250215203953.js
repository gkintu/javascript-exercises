const findTheOldest = function(people) { 
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, currentPerson) => { 
        const personAge = (currentPerson.yearOfDeath || currentYear - currentPerson.yearOfBirth );
        const oldestAge = (oldest.yearOfDeath || currentYear - oldest.yearOfBirth );
    
        return personAge > oldestAge ? currentPerson : oldest;
    
    });
    
}




// Do not edit below this line
module.exports = findTheOldest;
