var Snowman = require('./Snowman');

class Human {
    constructor(name) {
        this.name = name
        this.wantsToBuildASnowman = true
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
          };
        this.snowman = {}
        }

        gatherMaterials(buildingStuff, amount) {
        this.materials[buildingStuff] += amount
        }

        buildASnowman() {
        var snowman = new Snowman(this.materials)
        this.snowman = snowman
        return snowman
        }

        placeMagicHat(snowman) {
            if (this.snowman.coal >= 2) {
                snowman.magicHat = true
                return 'Woah, this snowman is coming to life!'
            }
            return 'I guess I didn\'t build it correctly.'
        }
    }


module.exports = Human;