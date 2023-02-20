

const {Stack} = require("../Stack/stack.js")

const stack = new Stack()

describe(`@Stack`, () => {

    describe(`#add`, () => {

        stack.add(1)
        stack.add(2)
        stack.add(3)

        it(`should be a function`, () => {
            expect(typeof stack.add).toBe("function")
        })

        it(`output should be a number`, () => {
            expect(typeof stack.add(4)).toBe("number")
        })

        it(`should contain 1`, () => {
            expect(stack.items).toContain(1)
        })

        it(`should contain 2`, () => {
            expect(stack.items).toContain(2)
        })

        it(`should contain 3`, () => {
            expect(stack.items).toContain(3)
        })

        it(`should  contain 4`, () => {
            expect(stack.items).toContain(4)
        })
    })

    describe(`#remove`, () => {

        it(`should be a function`, () => {
            expect(typeof stack.remove).toBe("function")
        })

        it(`output should be a number (remove)`, () => {
            expect(typeof stack.remove()).toBe("number")
        })

        it(`should not contain 4`, () => {
            expect(stack.items).not.toContain(4)
        })
    })

    describe(`#peek`, () => {
        it(`should be a function`, () => {
            expect(typeof stack.peek).toBe("function")
        })

        it(`output should be a number `, () => {
            expect(typeof stack.peek()).toBe("number")
        })

        it(`the peek should be number 3 `, () => {
            expect(stack.peek()).toBe(3)
        })


    })

    describe(`#isEmpty`, () => {
        it(`should be a function`, () => {
            expect(typeof stack.isEmpty).toBe("function")
        })

        it(`output should be a boolean`, () => {
            expect(typeof stack.isEmpty()).toBe("boolean")
        })

        it(`should be falsy`, () => {
            expect(stack.isEmpty()).toBeFalsy()
        })
    })

    describe(`#size`, () => {

        it(`should be a function`, () => {
            expect(typeof stack.size).toBe("function")
        })

        it(`output should be a number`, () => {
            expect(typeof stack.size()).toBe("number")
        })

        it(`the size should be 3`, () => {
            expect(stack.size()).toBe(3)
        })
    })
})