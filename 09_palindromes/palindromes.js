const palindromes = function (str) {
  const regex = /[a-z]/;

  const original = str.toLowerCase()
    .split("")
    .filter((x) => x.match(regex));

  const palindrome = original.slice();

  palindrome.reverse();
  
  return original.toString() === palindrome.toString();
}
// Do not edit below this line
module.exports = palindromes;
