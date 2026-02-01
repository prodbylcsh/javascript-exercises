const findTheOldest = function(array) {
    let highestAge = -1
    let oldestPerson = {}

    array.forEach(element => {
        let birth = element.yearOfBirth
        let death = Object.hasOwn(element, "yearOfDeath") ? element.yearOfDeath : new Date().getFullYear()

        let age = death - birth

        if (age > highestAge) {
            highestAge = age
            oldestPerson = element
        }
    });

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
