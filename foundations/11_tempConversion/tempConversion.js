const convertToCelsius = function(temp) {
    const unit = 32
    const celsius = (temp -unit) * (5/9)

    return +celsius.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  const unit = 32
  const fahrenheit = (temp * (9/5) + 32)

  return +fahrenheit.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
