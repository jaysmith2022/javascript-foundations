class Sphinx {
    constructor(name) {
        this.name = name
        this.riddles = []
        this.heroesEaten = 0
    }

    collectRiddle(phrases) {
        this.riddles.push(phrases)
        if (this.riddles.length > 3) {
            this.riddles.shift()
        }
    }
    attemptAnswer(answer) {
        
        for (var i = 0; i < this.riddles.length;i++) {
            if (this.riddles[i].answer === answer) {
                this.riddles.splice(i, 1)
            if (this.riddles.length === 0) {
                return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
            }
            return 'That wasn\'t that hard, I bet you don\'t get the next one'
            }
            

        }
        this.heroesEaten++
    }
}




module.exports = Sphinx;