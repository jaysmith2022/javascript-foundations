class Skater {
    constructor(skaterDetails) {
        this.name = skaterDetails.name
        this.skill = skaterDetails.skill
        this.tricks = skaterDetails.tricks
        this.money = skaterDetails.cash
        this.frustration = 0
    }
    practice(newTrick) {

        if (this.tricks[newTrick] === false) {
            this.frustration++
        }
        if (this.frustration >= 3) {
            this.tricks[newTrick] = true
            this.frustration = 0
            return `I just learned to ${newTrick}!!!`
        }
        
    }
}




module.exports = Skater;