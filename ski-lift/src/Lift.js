var Skier = require('./Skier');

class Lift {
    constructor(limit) {
        this.inService = true
        this.limit = limit
        this.skiers = []
        this.safetyBar = `up`
    }

    admitSkier(name, ticket) {
        var newSkier = new Skier(name, ticket )
        if (newSkier.hasLiftTicket === false){
            return `Sorry, ${name}. You need a lift ticket!`
        }
        if (this.limit > this.skiers.length) {
        this.skiers.push(newSkier)
    } else {
    return `Sorry, ${name}. Please wait for the next lift!` 
    }
}

startLift() {
    var neededSkiers = this.limit - this.skiers.length
    this.safetyBar = `down`
    if (this.skiers.length !== this.limit) {
        this.safetyBar = `up`
    }
    if (neededSkiers === 1) {
        return `We still need ${neededSkiers} more skier!`
    } else 
    return `We still need ${neededSkiers} more skiers!`
}
}

    


module.exports = Lift;