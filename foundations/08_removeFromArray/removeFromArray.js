const removeFromArray = function(array, ...args) {
    let filteredArray = array.filter(element => !args.includes(element))

    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
