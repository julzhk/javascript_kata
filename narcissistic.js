// A Narcissistic Number is a number which is the sum of its own digits, 
// each raised to the power of the number of digits.
// For example, take 153 (3 digits):

    // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):
    // 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

function narcissistic( value ) {
  var value = '' + value
  var r = [...value].map(function(a){
    return Math.pow((a/1), value.length)
  })
  // now sum it
  return (r.reduce((a, b) => a + b, 0) ===(value/1))
}



console.log(narcissistic(7))
console.log(narcissistic( 23331  ))