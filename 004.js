let palindrome = str => {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

console.log( palindrome("Cigar? Toss it in a can. It is so tragic") ) // output true
console.log( palindrome("Red rum, sir, is murder") ) // output true
console.log( palindrome("Eva, can I see bees in a cave?") ) // output true
console.log( palindrome("Hello World") )// output false
