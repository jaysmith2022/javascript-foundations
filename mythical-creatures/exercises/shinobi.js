class Shinobi {
    constructor (shinobiDetails) {
        this.name = shinobiDetails.name
        this.type = shinobiDetails.element || 'unknown'
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
        else if(this.powerLevel >= 10 && this.name === 'Hinata') {
            this.powerLevel -= 10
            this.createClones()
            this.jutsu = 'Byakugan'
        }
    }
    
}
module.exports = Shinobi;