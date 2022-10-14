class Centaur {
    constructor(centaurDetails) {
        this.name = centaurDetails.name
        this.breed = centaurDetails.type
        this.cranky = false
        this.standing = true
        this.layingDown = false
        this.activities = 0

    }

    shootBow() {
        if (this.cranky || this.layingDown) {
            return `NO!`
        }
        this.activities++
        if (this.activities === 3) {
            this.cranky = true
        }   
        return `Twang!!!`
    }
       

    run() {
        if (this.cranky || this.layingDown) {
            return `NO!`
        }
        this.activities++
        if (this.activities === 3) {
            this.cranky = true
        }   
        return 'Clop clop clop clop!!!'
    }

    sleep() {
        this.cranky = false
        if (this.standing === true) {
            return 'NO!'
        } 
        if (this.layingDown === true) { 
            return 'ZZZZ'
            }
        }
        

    layDown() {
        this.standing = false
        this.layingDown = true
    
    }

    standUp() {
        this.layingDown = false
        this.standing = true
    }

    drinkPotion() {
       this.cranky = false 
       if (this.standing === false) {
        return 'Not while I\'m laying down!'
       }
    }
}





module.exports = Centaur;