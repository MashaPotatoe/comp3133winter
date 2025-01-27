const assert = require('assert');
const calculatort = require('../app/calculator');

describe('testing calculator add', ()=>{
    it('returning addition 5+2 = 7 will succeed', ()=>{
        assert.equal(calculatort.add(5,2),7)
    })
})
describe('testing calculator add', ()=>{
    it('returning addition 5+2 = 8 will not', ()=>{
        assert.equal(calculatort.add(5,2),8)
    })
})

describe('testing calculator sub', ()=>{
    it('returning addition 5-2 = 3 will succeed', ()=>{
        assert.equal(calculatort.sub(5,2),3)
    })
})

describe('testing calculator sub', ()=>{
    it('returning addition 5-2 = 3 will not', ()=>{
        assert.equal(calculatort.sub(5,2),5)
    })
})

describe('testing calculator mul', ()=>{
    it('returning addition 5*2 = 10 will succeed', ()=>{
        assert.equal(calculatort.mul(5,2),10)
    })
})

describe('testing calculator mul', ()=>{
    it('returning addition 5*2 = 12 will not', ()=>{
        assert.equal(calculatort.mul(5,2),12)
    })
})

describe('testing calculator div', ()=>{
    it('returning addition 10/2 = 5will succeed', ()=>{
        assert.equal(calculatort.div(10,2),5)
    })
})

describe('testing calculator div', ()=>{
    it('returning addition 10/2 = 2 will not', ()=>{
        assert.equal(calculatort.div(10,2),2)
    })
})

