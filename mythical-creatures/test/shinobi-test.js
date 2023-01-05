const Shinobi = require('../exercises/Shinobi');
const assert = require('chai').assert;


describe('Naruto', () => {

    it('should have a name', () => {
        const naruto = new Shinobi({name: 'Naruto'})
        const hinata = new Shinobi({name: 'Hinata'})

        assert.equal(naruto.name, 'Naruto')
        assert.equal(hinata.name, 'Hinata')
    })

    it('should be able to have an element type', () => {
        const naruto = new Shinobi({name: 'Naruto', element: 'Wind'})
        
        assert.equal(naruto.type, 'Wind')
    })

    it('should start off with 0 kagebushins', () => {
        const naruto = new Shinobi({name: 'Naruto', element: 'Wind'})

        assert.equal(naruto.kagebushin, 0)
    })

    it('should start with 0 power level', () => {
        const naruto = new Shinobi({name: 'Naruto', element: 'Wind'})
        const hinata = new Shinobi({name: 'Hinata', element: 'Water'})

        assert.equal(naruto.powerLevel, 0)
        assert.equal(hinata.powerLevel, 0)
    })

    it('should gain 5 power when the shinobi eats ramen', () => {
        const naruto = new Shinobi({name: 'Naruto', element: 'Wind'})

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
    it('should use a special jutsu', () => {
        const naruto = new Shinobi({name: 'Naruto', element: 'Wind'})
        const hinata = new Shinobi({name: 'Hinata', element: 'Water'})
        naruto.eatRamen()
        naruto.eatRamen()
        naruto.eatRamen()
        assert.equal(naruto.powerLevel, 15)
        naruto.useSpecialJutsu()
        assert.equal(naruto.kagebushin, 1)
        assert.equal(naruto.powerLevel, 3)
        assert.equal(naruto.jutsu, 'Rasengan')
        hinata.eatRamen()
        hinata.eatRamen()
        hinata.eatRamen()
        assert.equal(hinata.powerLevel, 15)
        hinata.useSpecialJutsu()
        assert.equal(hinata.kagebushin, 1)
        assert.equal(hinata.powerLevel, 3)
        assert.equal(hinata.jutsu, 'Byakugan')
    })
})