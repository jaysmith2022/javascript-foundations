const Shinobi = require("./shinobi");

class Uchiha {
  constructor(name, bestFriend) {
    this.name = name;
    this.bestFriend = bestFriend;
    this.genjutsu = [];
  }

  fightTime(shinobiName) {
    var newShinobi = new Shinobi(shinobiName);
    newShinobi.name = shinobiName;
    this.bestFriend = newShinobi;
    if (newShinobi.name !== "Naruto") {
      this.genjutsu.push(newShinobi.name);
    } else {
      return "It is my ninja way, SASUKE!!";
    }
  }
}

module.exports = Uchiha;
