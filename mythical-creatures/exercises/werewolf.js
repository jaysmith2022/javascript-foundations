class Werewolf {
    constructor(name, form) {
        this.name = name
        this.form = form || `human`
        this.hungry = false
    }
    completeTransformation() {
       if (this.form === `human`) {
         this.form = `wolf`;
         this.hungry = true
         return 'Aaa-Woooo!'
        } else {
            this.form = `human`;
            this.hungry = false
            return 'Where are I?'
        }
}

eatVictim(victim) {
    if (this.form === `human`) {
        this.hungry = false
        return `No way am I eating ${victim.name}, I'd like a burger!`
    }
    if (this.form === `wolf`) {
        this.hungry = true
        victim.alive = false;
        this.form = 'human'
        return `Yum, ${victim.name} was delicious.`  
    } 
 
}
}








module.exports = Werewolf;