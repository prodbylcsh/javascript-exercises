const palindromes = function (string) {
    let cleaned = string.replaceAll(/[^a-zA-Z1-9]/gm, "")
    const stringLength = cleaned.length

    let firstPart = "", secondPart = ""
    
    if (stringLength >= 0) {
        cleaned = cleaned.toLowerCase()
        firstPart = cleaned.substring(0, Math.floor(stringLength/2))
        secondPart = cleaned.substring(Math.ceil(stringLength/2), stringLength)
        const reversed = Array.from(secondPart).reverse().join("")

        if (firstPart === reversed) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
