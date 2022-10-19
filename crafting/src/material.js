class Material {
    constructor(name, price, amount, units) {
        this.name = name
        this.price = price
        this.amount = amount
        this.units = units
    }
    useMaterial(use) {
        if (this.amount < use) {
        return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
        
    }
    this.amount -= use
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    
}
calculateMaterialCost() {
    

}
}

module.exports = Material;
