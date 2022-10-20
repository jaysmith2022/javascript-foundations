const { Runner } = require("mocha")

class Roadrace {
    constructor(raceDetails) {
        this.name = raceDetails.title
        this.location = raceDetails.city
        this.distance = 0
        this.participants = []
    }

    setDistance(distance) {
        this.distance += distance
        return `The ${this.name} in ${this.location} is a ${distance} mile race.`
    }

    registerParticipants(runner) {
        this.participants.push(runner)
    }

    completeRace() {
        for (var i = 0; i < this.participants.length;i++) {
            this.participants[i].completedRaces.push(this.name)
            this.participants[i].milesRun = this.distance
        }
        
    }
}

module.exports = Roadrace;
