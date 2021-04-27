class Fighter {
    constructor(name, health, damagePerAttack)
    {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    //this.toString = function() { return this.name; }
    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
   
    let first;
    let second;
    
    if (firstAttacker == fighter1.name) 
    {
        first = fighter2;
        second = fighter1;
    }
    if (firstAttacker == fighter2.name) 
    {
        first = fighter1;
        second = fighter2;
    }

        while (first.health > 0 && second.health > 0) {
            first.health = first.health - second.damagePerAttack;
            if (first.health <= 0) return second.name;
            second.health = second.health - first.damagePerAttack;
            if (second.health <= 0) return first.name;
        }
} 

function main() {
   console.log(declareWinner(new Fighter("Jon", 10, 2), new Fighter("Dean", 5, 4), "Jon"));
   console.log(declareWinner(new Fighter("Jon", 10, 2), new Fighter("Dean", 5, 4), "Dean"));
   console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"));
   console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"));
   console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"));
   console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"));
}

