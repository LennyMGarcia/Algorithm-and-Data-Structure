//--------PRIORITY QUEUE IS THE SAME-----

const {Queue} = require("../Queue/queue.js")

const queue = new Queue()

describe(`@Queue`, () => {

    describe(`#enqueue`, () => {

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        it(`should be a function`, () => {
            expect(typeof queue.enqueue).toBe("function")
        })

        it(`output should be a number`, () => {
            expect(typeof queue.enqueue(4)).toBe("number")
        })

        it(`should contain 1`, () => {
            expect(queue.collection).toContain(1)
        })

        it(`should contain 2`, () => {
            expect(queue.collection).toContain(2)
        })

        it(`should contain 3`, () => {
            expect(queue.collection).toContain(3)
        })

        it(`should  contain 4`, () => {
            expect(queue.collection).toContain(4)
        })
    })

    describe(`#dequeue`, () => {

        it(`should be a function`, () => {
            expect(typeof queue.dequeue).toBe("function")
        })

        it(`output should be a number (dequeue)`, () => {
            expect(typeof queue.dequeue()).toBe("number")
        })

        it(`should not contain 1`, () => {
            expect(queue.collection).not.toContain(1)
        })
    })

    describe(`#front`, () => {
        it(`should be a function`, () => {
            expect(typeof queue.front).toBe("function")
        })

        it(`output should be a number `, () => {
            expect(typeof queue.front()).toBe("number")
        })

        it(`the peek should be number 2 `, () => {
            expect(queue.front()).toBe(2)
        })


    })

    describe(`#isEmpty`, () => {
        it(`should be a function`, () => {
            expect(typeof queue.isEmpty).toBe("function")
        })

        it(`output should be a boolean`, () => {
            expect(typeof queue.isEmpty()).toBe("boolean")
        })

        it(`should be falsy`, () => {
            expect(queue.isEmpty()).toBeFalsy()
        })
    })

    describe(`#size`, () => {

        it(`should be a function`, () => {
            expect(typeof queue.size).toBe("function")
        })

        it(`output should be a number`, () => {
            expect(typeof queue.size()).toBe("number")
        })

        it(`the size should be 3`, () => {
            expect(queue.size()).toBe(3)
        })
    })
})