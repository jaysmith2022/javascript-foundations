class Ogre {
    constructor(ogreDetails) {
        this.name = ogreDetails.name
        this.home = ogreDetails.abode
        this.swings = 0
    }
    encounter(person) {
       person.encounterCounter++

       if(person.noticesOgre()) {
        this.swingAt(person)
       }
       person.knockedOut = true
    }
    swingAt() {
        this.swings++
    }

    apologize(person) {
        person.knockedOut = false
    }
}










module.exports = Ogre;