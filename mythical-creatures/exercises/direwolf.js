// const Stark = require("./stark")

class Direwolf {
    constructor(name, home, size) {
        this.name = name
        this.home = home || 'Beyond the Wall'
        this.size = size || 'Massive'
        this.starksToProtect = []
        this.huntsWhiteWalkers = true
    }

    protect(protectStark) {   
        var limit = this.starksToProtect.length < 2
    if (protectStark.location === this.home && limit) {
        this.starksToProtect.push(protectStark)
        protectStark.safe = true
        this.huntsWhiteWalkers = false
    }
}

    leave(protectStark) {
        this.starksToProtect.splice(protectStark)
        protectStark.safe = false
    }
}





module.exports = Direwolf;