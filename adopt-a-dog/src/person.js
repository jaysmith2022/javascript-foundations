var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name
    this.dog = dog
  }
fillFoodBowl() {
  this.dog.hungry = false
}
throwBall() {
  if (this.dog.energyLevel <= 3) {
    return
  }
  this.dog.energyLevel -= 1
  return `${this.dog.name} loves playing fetch!`

}
introduceNewFriends(dogFriend) {
this.dog.friends.push(dogFriend.name)
}
adoptAPup(dogName, dogAge) {
var newDog = new Dog(dogName, dogAge)
newDog.name = dogName
newDog.age = dogAge

if (this.dog === undefined) {
  this.dog = newDog
} else {
  return 'You can\'t adopt Chloe. You already have Cap!'
    }

  }

}



module.exports = Person;
