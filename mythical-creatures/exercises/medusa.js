var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []

    }
    gazeAtVictim(victim) {
    var statue = new Statue(victim.name)
    this.statues.push(statue)

  if (this.statues.length === 4) {
    var freedStatue = this.statues.shift()
    var person = new Person(freedStatue.name, 'relieved')
    return person
  }
  }
}

module.exports = Medusa;