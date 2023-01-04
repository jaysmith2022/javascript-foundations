class Shinobi {
    constructor (name, element) {
        this.name = name
        this.element = element || 'unknown'
        this.kagebushin = 0
        this.powerLevel = 0
        this.jutsu = 'none'
    }
    eatRamen() {
        this.powerLevel += 5
    }
    createClones() {
        if(this.powerLevel < 5) {
        return  'I need more Ramen!'
        } else {
        this.powerLevel -= 2
        this.kagebushin += 1
        }
    }
    useSpecialJutsu() {
        if(this.powerLevel >= 10 && this.name === 'Naruto') {
        this.powerLevel -= 10
        this.createClones()
        this.jutsu = 'Rasengan'
        } 
    }
    
}
module.exports = Shinobi;