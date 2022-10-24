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
            if (this.occupants.length === 3) {
                return 'Sorry, we are at max capacity. Thank you for understanding.'
              }
          
              if (this.isPrivate) {
                if (skater.money >= this.cost) {
                  this.occupants.push(skater)
                  skater.money -= this.cost
                  return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
                } else {
                  return `Sorry, you don't have enough money.`
                }
              }
          
              this.occupants.push(skater)
              return `Welcome to the free ${this.name} Skatepark!`
            }
          }
            
             
                
            
            
        
    
        






module.exports = SkatePark;