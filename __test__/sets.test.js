
const {isSuperset, union, intersection, symmetricDifference, difference} = require("../Sets/sets.js")

const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([2, 3]);
  const setC = new Set([3, 4, 5, 6]);

  _union = union(setA, setC)
  _intersection = intersection(setA, setC)
  _symmetricDifference = symmetricDifference(setA, setC)
  _difference = difference(setA, setC)

describe(`@Sets`, () => {

    describe(`#isSuperset`, () => {

        it(`should be a function`, () => {
            expect(typeof isSuperset).toBe("function")
        })

        it(`output should be a boolean`, () => {
            expect(typeof isSuperset(setA, setB)).toBe("boolean")
        })

        it(`should be truth`, () => {
            expect(isSuperset(setA, setB)).toBeTruthy()
        })
    })
    
    describe(`#union`, () => {
        it(`should be a function`, () => {
            expect(typeof union).toBe("function")
        })

        it(`output should be a object`, () => {
            expect(typeof union(setA, setC)).toBe("object")
        })

        it(`should contain 1 `, () => {
            expect( _union).toContain(1)
        })

        it(`should contain 2 `, () => {
            expect( _union).toContain(2)
        })

        it(`should contain 3 `, () => {
            expect( _union).toContain(3)
        })

        it(`should contain 4 `, () => {
            expect( _union).toContain(4)
        })

        it(`should contain 5 `, () => {
            expect( _union).toContain(5)
        })

        it(`should contain 6`, () => {
            expect( _union).toContain(6)
        })
    })

    describe(`#intersection`, () => {
        it(`should be a function`, () => {
            expect(typeof intersection).toBe("function")
        })

        it(`output should be a object`, () => {
            expect(typeof intersection(setA, setC)).toBe("object")
        })

        it(`should contain 3 `, () => {
            expect( _intersection).toContain(3)
        })

        it(`should contain 4 `, () => {
            expect( _intersection).toContain(4)
        })
    })

    describe(`#symmetricDifference`, () => {
        it(`should be a function`, () => {
            expect(typeof symmetricDifference).toBe("function")
        })

        it(`output should be a object`, () => {
            expect(typeof symmetricDifference(setA, setC)).toBe("object")
        })

        it(`should contain 1 `, () => {
            expect( _symmetricDifference).toContain(1)
        })

        it(`should contain 2 `, () => {
            expect( _symmetricDifference).toContain(2)
        })


        it(`should contain 5 `, () => {
            expect( _symmetricDifference).toContain(5)
        })

        it(`should contain 6`, () => {
            expect( _symmetricDifference).toContain(6)
        })
    })

    describe(`#difference`, () => {
        it(`should be a function`, () => {
            expect(typeof difference).toBe("function")
        })

        it(`output should be a object`, () => {
            expect(typeof difference(setA, setC)).toBe("object")
        })

        it(`should contain 1 `, () => {
            expect(_difference).toContain(1)
        })

        it(`should contain 2 `, () => {
            expect( _difference).toContain(2)
        })
    })
})