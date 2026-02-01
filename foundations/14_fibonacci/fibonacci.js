const fibonacci = function(number) {
    number = +number
    if (number === 0) {
        return 0
    } else if (number < 0) {
        return "OOPS"
    }

    let counter = 2
    let previous = 1
    let subprevious = 1
    let result = 1

    while (counter < number) {
        subprevious = previous
        previous = result
        result = subprevious + previous

        counter++ 
    }

    return result
};

// Do not edit below this line
module.exports = fibonacci;
