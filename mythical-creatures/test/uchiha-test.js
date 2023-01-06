const Shinobi = require("../exercises/shinobi.js");
const Uchiha = require("../exercises/uchiha.js");
const assert = require("chai").assert;

describe("Uchiha", function () {
  it("should have a name and a best friend", function () {
    var naruto = new Shinobi({ name: "Naruto" });
    var sasuke = new Uchiha("Sasuke", naruto);

    assert.equal(sasuke.name, "Sasuke");
    assert.instanceOf(sasuke.bestFriend, Shinobi);
    assert.equal(sasuke.bestFriend.name, "Naruto");
  });

  it("should be able to have no bestFriend", function () {
    var sasuke = new Uchiha("Sasuke");

    assert.equal(sasuke.bestFriend, undefined);
  });

  it("should have a place to hold enemies in genjutsu", function () {
    var sasuke = new Uchiha("Sasuke");

    assert.deepEqual(sasuke.genjutsu, []);
  });

  it("should be able to have a best friend", function () {
    var sasuke = new Uchiha("Sasuke");

    sasuke.fightTime("Naruto");

    assert.instanceOf(sasuke.bestFriend, Shinobi);

    assert.equal(sasuke.bestFriend, "Naruto");
  });

  it.skip("should not place best friend in genjutsu", function () {
    var naruto = new Shinobi({ name: "Naruto" });
    var sasuke = new Uchiha("Sasuke", naruto);

    var genjutsuFight = sasuke.fightTime("Naruto");

    assert.deepEqual(sasuke.genjutsu, []);

    assert.equal(genjutsuFight, "It is my ninja way, SASUKE!!");
  });

  it.skip("should place other shinobi in genjutsu", function () {
    var neji = new Shinobi({ name: "Neji" });
    var sasuke = new Uchiha("Sasuke");

    sasuke.fightTime(neji.name);

    assert.deepEqual(sasuke.genjutsu, ["Neji"]);
  });
});
