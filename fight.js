// a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {

	if (fighter1 == firstAttacker){
		first = fighter1
		second = fighter2
	} else {
		first = fighter2
		second = fighter1
	}
	while (true){
		a = do_attack(first, second)
		if (a){ return a }
		b = do_attack(second, first)
		if (b) { return b }
	}
}

function do_attack(attacker, defender){
	   defender.health -= attacker.damagePerAttack
   if (defender.health <=0){
   	return attacker.name
   } else {
   	return ''
   }
}

r = declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")

console.log(r)