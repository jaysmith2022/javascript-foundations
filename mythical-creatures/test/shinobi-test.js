const assert = require('chai').assert;
const Shinobi = require('../exercises/Shinobi');

describe('Naruto', () => {

    it('should instantiate our a Shinobi', function() {
        var naruto = new Shinobi();
    
        assert.instanceOf(naruto, Shinobi);
    });

    it('should have a name', () => {
        const naruto = new Shinobi('Naruto')
        const hinata = new Shinobi('Hinata')

        assert.equal(naruto.name, 'Naruto')
        assert.equal(hinata.name, 'Hinata')
    })

    it('should start with unknown element by default', () => {
        const naruto = new Shinobi('Naruto')
        
        assert.equal(naruto.element, 'unknown')
    })

    it('should start off with 0 kagebushins', () => {
        const naruto = new Shinobi('Naruto', 'Wind')
        const hinata = new Shinobi('Hinata', 'Water')

        assert.equal(naruto.kagebushin, 0)
        assert.equal(naruto.element, 'Wind')
        assert.equal(hinata.element, 'Water')
    })

    it('should start with 0 power level', () => {
        const naruto = new Shinobi('Naruto', 'Wind')
        const hinata = new Shinobi('Hinata', 'Water')

        assert.equal(naruto.powerLevel, 0)
        assert.equal(hinata.powerLevel, 0)
    })

    it('should gain 5 power when the shinobi eats ramen', () => {
        const naruto = new Shinobi('Naruto', 'Wind')

        naruto.eatRamen()
        assert.equal(naruto.powerLevel, 5)
        naruto.eatRamen()
        assert.equal(naruto.powerLevel, 10)
    })

    it('should be able to create kagebushin after gaining power', () => {
        const naruto = new Shinobi('Naruto', 'Wind')
        naruto.eatRamen()
        assert.equal(naruto.powerLevel, 5)
        naruto.createClones()
        assert.equal(naruto.powerLevel, 3)
        assert.equal(naruto.kagebushin, 1)
    })

    it('should not be able to create clones if power is under 5', () => {
        const naruto = new Shinobi('Naruto', 'Wind')

        naruto.eatRamen()
        assert.equal(naruto.powerLevel, 5)
        naruto.createClones()
        assert.equal(naruto.powerLevel, 3)
        assert.equal(naruto.kagebushin, 1)
        assert.equal(naruto.createClones(), 'I need more Ramen!')
        naruto.createClones()
        assert.equal(naruto.powerLevel, 3)
        assert.equal(naruto.kagebushin, 1)
    })

    it('should have a default special jutsu', () => {
        const naruto = new Shinobi('Naruto', 'Wind')
        const hinata = new Shinobi('Hinata', 'Water')

        assert.equal(naruto.jutsu, 'none')
        assert.equal(hinata.jutsu, 'none')
    })
    it('should activate special jutsu using 10 power and 1 clones', () => {
        const naruto = new Shinobi('Naruto', 'Wind')
        naruto.eatRamen()
        naruto.eatRamen()
        assert.equal(naruto.powerLevel, 10)
        naruto.eatRamen()
        assert.equal(naruto.powerLevel, 15)
        naruto.useSpecialJutsu()
        assert.equal(naruto.kagebushin, 1)
        assert.equal(naruto.powerLevel, 3)
        assert.equal(naruto.jutsu, 'Rasengan')
    })
})