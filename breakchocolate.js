// given a chocolate bar of given dimension n x m squares. 
// Implement a function to minimum number of breaks needed to break up the choclate bar entirely.

// For example a chocolate bar of size 2 x 1 can split into single squares in just one break.
// for size 3 x 1 you can do it in two breaks.

var breakChocolate = function(n, m) {
  if (n>m){
 	var big = n
 	var small = m
  } else {
 	var small = n
 	var big = m
  }
  if (big == 1){
    return 0
  }
  let fragment1 = Math.floor(big/2)
  let fragment2 = big - fragment1
  return 1 + breakChocolate(fragment1,small ) + breakChocolate(fragment2,small)
};

var r = breakChocolate(5,5)
console.log(r == 24)