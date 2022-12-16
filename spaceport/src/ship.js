class Ship {
    constructor(shipDetails) {
        this.name = shipDetails.name
        this.type = shipDetails.type
        this.maxCrew = shipDetails.maxCrew
        this.odometer = shipDetails.odometer || 0
        this.fuelCapacity = shipDetails.fuelCapacity || 10
        this.fuel = 0
        this.captain = shipDetails.captain
        this.crew = []
    }


    addCrew(crewMembers) {
        for (var i = 0; i < crewMembers.length;i++) {
            if (this.maxCrew > crewMembers.length) {
            this.crew.push(crewMembers[i])

        }

    }
}
}





module.exports = Ship;