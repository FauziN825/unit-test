const math = require('../math')


describe('Test Math', () => {

    const add = (a,b) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if(a < 0 || b < 0)
                reject(new Error('Number should be non-negatif'))
                resolve(a+b);
            },200)
        })
    }

    it('Shoud Calculate Total Tip', () => {
        const total = math(10,0.3)
        expect(total).toBe(13);
    })
    it('Should Calculate Total Tip with default percent', () => {
        const total = math(10)
        expect(total).toBe(12);
    })
    it('Should return sum of two number', async () => {
        const sum = await add(10,20)
        expect(sum).toBe(30)
    })
})

