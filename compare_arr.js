function comp(array1, array2){
  array1.forEach(function(value,index){
  	if(value != array2[index]){
  		return false
  	}
  })
  return true
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1, a2)) // true);