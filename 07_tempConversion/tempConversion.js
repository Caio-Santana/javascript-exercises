const ftoc = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round((celsius + Number.EPSILON) * 10) / 10;
};

const ctof = function (celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return Math.round((fahrenheit + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
