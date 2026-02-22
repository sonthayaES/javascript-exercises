const convertToCelsius = function(temp) {
  let celsiusConverted = (temp - 32) * 5 / 9;
  celsiusConverted = Math.round(celsiusConverted * 10) / 10;
  return celsiusConverted;
};   

const convertToFahrenheit = function(temp) {
  let fahrenheitConverted = (temp * 9 / 5) + 32;
  fahrenheitConverted = Math.round(fahrenheitConverted * 10) / 10;
  return fahrenheitConverted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
