class Golfer {
    constructor(golferDetails) {
        this.name = golferDetails.name
        this.handicap = golferDetails.handicap
        this.frustration = 0
        this.confidence = 0
    }
    calculateAvg(par) {
        var average = par += this.handicap
        return `I usually shoot a ${average} on average.`
    }

    playRound(course) {
       if (course.difficulty === `hard`) {
        this.frustration = 500
       } 
       if (course.difficulty === `moderate`) {
        this.frustration = 100
       }
    }

    hitTheRange() {
        this.confidence+=10
    }

    marvel(course) {
        return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
    }

    whatYaShoot(score) {
        if(score < 0) {
            this.frustration = 0
            return 'I AM THE GREATEST GOLFER ALIVE!'
      
        }
        if (score === 0) {
            this.frustration = 10
        return 'Booyah!'
    }
        if (score === 2) {
            this.frustration = 30
            return `Doh!`
        }
        if (score >= 3) {
            this.frustration = 20
            return `Doh!`
        }
    
        }
    }


module.exports = Golfer;
