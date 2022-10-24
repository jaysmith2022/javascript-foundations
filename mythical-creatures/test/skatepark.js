class SkatePark {
    constructor(parkDetails) {
        this.name = parkDetails.name
        this.yearFounded = parkDetails.year
        this.style = parkDetails.type
        this.features = parkDetails.features
        this.isPrivate = parkDetails.isPrivate || false
        this.cost = parkDetails.price || 0
        this.occupants = []
        }

        admit(skater) {
            
            
            if (this.isPrivate === true && skater.cash >= this.cost) {
            skater.money -= this.cost
            this.occupants.push(skater)
            return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
            } else {
                return `Sorry, you don't have enough money.` 
            }
        
        }
    }
        






module.exports = SkatePark;