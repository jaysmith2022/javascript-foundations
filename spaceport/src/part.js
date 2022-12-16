class Part {
    constructor(partDetails) {
        this.name = partDetails.name
        this.type = partDetails.type
        this.value = partDetails.value
        this.broken = false
        this.checkForValidity = ``
        this.isValid = false

        if (!this.name) {
            this.checkForValidity = `This part needs a name!`
        } 
        if (!this.type) {
            this.checkForValidity = `This part needs a type!`
        }
        if (!this.value) {
            this.checkForValidity = `This part needs a value!`
        }
        if (this.name && this.type && this.value) {
            this.isValid = true
        }
    }
}





module.exports = Part;