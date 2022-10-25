class LunchBox {
    constructor(lunchDetails) {
        this.owner = lunchDetails.owner
        this.material = lunchDetails.madeOf
        this.shape = lunchDetails.shape
        this.color = lunchDetails.color
        this.snacks = []
        this.healthySnacks = []
    }

    acquireSnack(snacks) {
        this.snacks.push(snacks)
        snacks.isInLunchBox = true
    }
    findHealthySnacks() {
        for (var i = 0; i < this.snacks.length; i++) 
        if (this.snacks[i].checkForHealthy()) 
        this.healthySnacks.push(this.snacks[i].type)
        return this.healthySnacks
        }
        
    }


module.exports = LunchBox;
