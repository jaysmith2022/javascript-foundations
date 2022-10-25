class Snack {
    constructor(type) {
        this.type = type
        this.deliciousLevel = `extra`
        this.amount = 100
        this.isInLunchBox = false
        this.cuttingItClose = false
    }
    getEaten() {
        this.amount -= 10
        var cutOffAmount = 100 * .20
        if(this.amount <= cutOffAmount) {
            this.cuttingItClose = true
        }
    }
    checkForHealthy() {
        var lowerCase = this.type.toLowerCase()
        if (lowerCase.includes("fruit")){
            return true
        } else {
        return false
    }
}
}

module.exports = Snack;
