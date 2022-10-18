class Fairy {
    constructor(name) {
        this.name = name
        this.dust = 10
        this.clothes = {dresses:[`Iris`]}
        this.disposition = `Good natured`
        this.humanWards = []
    }

    receiveBelief() {
        this.dust++
    }

    believe() {
        this.dust+=10
    }
    makeDresses(dresses) {
        for (var i = 0; i < dresses.length;i++) {
        this.clothes.dresses.push(dresses[i])
    }
}
    becomeProvoked() {
        this.disposition = `Vengeful`
    }

    replaceInfant(babies) {
        if (this.disposition === 'Vengeful') {
            babies.disposition = 'Malicious'
            this.humanWards.push(babies)
          }
      
          if (this.humanWards.length === 3) {
            this.disposition = 'Good natured'
          }
      
          return babies
        }
    }






module.exports = Fairy