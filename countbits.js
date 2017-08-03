var countBits = function(n) {
  let bin = n.toString(2)
  bin = bin.split("")
  var sum =0
  bin.forEach(function(currentValue){
  	sum += (+currentValue)
  })
return sum
}

console.log(countBits(9))