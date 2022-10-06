class Pirate {
    constructor(name, job) {
        this.name = name
        this.job = job || "scallywag"
        this.cursed = false
        this.booty = 0
        this.robbed = 0
        

    }
    robShip() {
        this.robbed++
        if (this.robbed >= 6) {
            this.cursed = true 
            return 'ARG! I\'ve been cursed!'
        }
        this.booty += 100
        return `YAARRR!`
}

liftCurse() {
    if (this.cursed === false) {
        return 'You don\'t need to lift a curse!'
    }
    this.booty -= 300
    this.cursed = false
    return 'Your curse has been lifted!'
}
}

module.exports = Pirate;