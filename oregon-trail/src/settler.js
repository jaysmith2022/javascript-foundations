class Settler {
    constructor(settlerDetails) {
        this.name = settlerDetails.name
        this.age = settlerDetails.age
        this.nationality = settlerDetails.nationality || `unknown`
        this.status = `healthy`
        this.ailments = []
    }
    experienceDistress(injury) {
        this.ailments.push(injury)
        if(injury === `broken arm`) {
            this.status = `fair`
        } 
        if(injury === `dysentery`) {
            this.status = `poor`
        }
        if (this.ailments.length >= 3) {
            this.status = `dead`
        }
        if(this.ailments.length >= 4) {
            this.ailments.pop()
        }
    }

    heal() {
        if (this.status === 'dead') {
            return 'Sorry, we can\'t heal a corpse. Will needs a proper burial!'
        } else {
        this.status = 'healthy'
        this.ailments = []
    }
}
}


module.exports = Settler;