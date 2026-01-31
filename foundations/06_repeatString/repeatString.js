const repeatString = function(repeat, num) {
    if (num < 0 || typeof num !== "number" || typeof repeat !== "string") {
        return "ERROR"
    }

    let string = ""

    for (let i = 0; i < num; i++) {
        string += repeat
    }

    return string
};

// Do not edit below this line
module.exports = repeatString;
