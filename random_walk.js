// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You have a list of one-letter strings representing directions to walk 
// (eg. ['n', 's', 'w', 'e']) .. it takes you one minute to traverse one city block, 

// create a function that will return true if the walk the app gives you will take you exactly ten minutes 
// and will, of course, return you to your starting point. Return false otherwise.




function isValidWalk(walk) {
const EXACT_WALK_DISTANCE = 10
if (walk.length != EXACT_WALK_DISTANCE){
	return false
}
let x = 0
let y = 0
walk.map(function(i){
	x += (i=='n')  
	x -= (i=='s')  
	y += (i=='e')  
	y -= (i=='w')  
	}
)
return !(x || y) 
}


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))