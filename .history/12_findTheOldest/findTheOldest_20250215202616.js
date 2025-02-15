const findTheOldest = function() {
 const currentYear = new Date().getFullYear();

return people.reduce(oldest, currentPerson) => {
    const personAge = (currentPerson.yearOfDeath || currentYear - currentPerson.yearOfBirth );
    const oldestAge = (person.yearOfDeath || currentYear - person.yearOfBirth );

    return personAge > oldestAge ? personAge : oldestAge;

}
};

// Do not edit below this line
module.exports = findTheOldest;
