class Dog {
  constructor(dogDetails) {
    this.name = dogDetails.name
    this.age = dogDetails.age
    this.energyLevel = 5
    this.hungry = true
    this.friends = []
    this.eatCount = 0
  }
eat() {
  this.eatCount += 1
  if (this.eatCount > 1 ) {
  return 'I refuse to eat.'
  }

  this.hungry = false
  return `Yum!`
}
fetchBall() {
  if (this.energyLevel <= 3) {
    return 'Nah, I\'m going to sleep instead.'
  }
  this.energyLevel -= 1
  return `This is fun!`
}
sleep() {
  if (this.energyLevel >= 10) {
    return 'I have too much energy to rest. I\'m going to chew something instead.'
  }
  this.energyLevel++
}
makeNewFriend(friend) {
this.friends.push(friend.name)
}

}
  


module.exports = Dog;
