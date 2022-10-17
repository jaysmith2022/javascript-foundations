const Direwolf = require("./direwolf")

class Stark {
    constructor(starkDetails) {
        this.name = starkDetails.name
        this.location = starkDetails.area || 'Winterfell'
        this.safe = false
    }

    sayHouseWords() {
        if (this.safe === true) {
        return 'The North Remembers'     
        } else {
        return 'Winter is Coming'
    }
}

callDirewolf(name, home) {
    var newdirewolf = new Direwolf(name, home)
    newdirewolf.home = this.location
    newdirewolf.protect(this)

    return newdirewolf
  }
}


module.exports = Stark;