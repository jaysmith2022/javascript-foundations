class Gear {
    constructor(type, quantity) {
        this.type = type
        this.quantity = quantity
    }
    checkForValidity() {
        if(this.type === `ammunition`) {
            return 'Great, we\'ll need lots of ammunition!'
        }
        if (this.type === `mp3 player`) {
            this.type = null
            return 'I don\'t think a mp3 player will help us.'
        }
    }
}

module.exports = Gear;
