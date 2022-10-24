const Costume = require("./costume");

class TrickOrTreater {
    constructor(costume, bag) {
       this.dressedUpAs = costume.style
       this.bag = bag
       this.hasCandy = false
       this.countCandies = 0
    }

    putCandyInBag(candy) {
        this.bag.candies.push(candy)
        this.hasCandy = true
        this.countCandies = this.bag.candies.length
        this.bag.count = this.bag.candies.length
    
    }
    eat() {

        this.bag.candies.shift()
        this.countCandies -= 1
    }
}




module.exports = TrickOrTreater;