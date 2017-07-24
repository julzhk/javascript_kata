// Implement a function 'likes'
 // which must take in input array, 
 // containing the names of people who like an item. 
 // It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] 
// must be "Alex, Jacob and 2 others like this"
// For more than 4 names, the number in and 2 others increases


function likes(names) {
  switch (names.length){
 	case 0:
	  return 'no one likes this'
	  break
	
	case 1:
		return names[0] + ' likes this'
	case 2:
		return names[0] + ' and ' + names[1] + ' like this'
	case 3:
		return names[0] + ', ' + names[1] +' and ' + names[2] + ' like this'
	}
	return names[0] +', '+ names[1] + ' and ' + ((names.length)-2) + ' others like this'
}

console.log(likes([]))
console.log(likes(['adam']))
console.log(likes(['adam','bob']))
console.log(likes(['adam','bob','cid']))
console.log(likes(['adam','bob','cid','dave'])

// clever version
function likes(names) {
  names.length === 0 && (names = ["no one"]);
  let [a, b, c, ...others] = names;
  switch (names.length) {
    case 1: return `${a} likes this`;
    case 2: return `${a} and ${b} like this`;
    case 3: return `${a}, ${b} and ${c} like this`;
    default: return `${a}, ${b} and ${others.length + 1} others like this`;
  }
}	