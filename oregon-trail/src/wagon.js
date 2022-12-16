class Wagon {
    constructor(wagonDetails) {
        this.title = wagonDetails.name
        this.wheels = wagonDetails.wheels || []
        this.axles = wagonDetails.axles || []
        this.oxen = wagonDetails.oxen || []
        this.yokes = wagonDetails.yokes || []
        this.food = wagonDetails.food
        this.ammunition = wagonDetails.ammunition
        this.clothes = wagonDetails.clothes
        this.settlers = wagonDetails.settlers || []
    }

    addPart(parts) {
        this.wheels.push(parts)
        this.axles.push(parts)
        this.oxen.push(parts)
        this.yokes.push(parts)
    }

    canTravel() {

        for (var i = 0; i < this.wheels.length;i++) {
            if (this.wheels[i].broken === true) {
                return false
            }
        }
        for (var i = 0; i < this.axles.length;i++) {
            if(this.axles[i].broken === true) {  
                return false
            }
        }
        for (var i = 0; i < this.oxen.length;i++) {
            if(this.oxen[i].broken === true) {  
                return false
            }
        }
        if (this.wheels.length <= 3 || this.axles.length <= 1 || this.oxen.length < 2 || this.yokes.length < 1 || this.settlers.length === 0) {
            return false
        }
        if (this.yokes.length === 0 && this.oxen.length > 1) {
            return false
        } else {
            return true
        }
    }

}




module.exports = Wagon;