const fibonacci = function(number) {
    number = +number
    if (number === 0) {
        return 0
    } else if (number < 0) {
        return "OOPS"
    }

    let counter = 2
    let current = 1
    let previous = 1
    let subprevious = 1
    let result = 1
    console.log(`Hledám ${number}. člena posloupnosti`)

    while (counter < number) {
        console.log(`Jedu ${counter}. člena posloupnosti`)
        subprevious = previous
        previous = result

        console.log(`Počítám ${subprevious} + ${previous}`)
        result = subprevious + previous

        counter++ 
    }

    return result
};

// Do not edit below this line
module.exports = fibonacci;
