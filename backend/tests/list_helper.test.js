const listHelper = require('../utils/list_helper')

describe('list helper', ()=> {
    test('dummy returns 1', ()=>{
        const blogs = []

        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
    })
})