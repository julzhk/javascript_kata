// given an array of integers, take the array and
 // find the item N where the sum of the integers to
  // the left of N is equal to the sum of the integers
   // to the right of N. 

   // If there is no solution return -1.


 // example: {1,2,3,4,3,2,1}:
// return the index 3, because the sum of left side 
// of the index ({1,2,3}) === the sum of the right side
 // ({3,2,1}) ie: both equal 6.



function findEvenIndex(arr){
  let total = 0
  arr.forEach(function(val){
 	total += val
  })
  let leftsum = 0
  for(let index=0;index<=arr.length; index+=1){
    val = arr[index]
 	total -= val
 	console.log(total)
 	console.log(leftsum)
 	if(total==leftsum){
 		return index
 	}
 	leftsum += val
    }
 }

 console.log(findEvenIndex([1,2,3,4,3,2,1]))