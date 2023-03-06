
const {LinkedList} = require("../Linked List/linkedList.js")

const linkedList = new LinkedList();

let command = 'npm run test:LinkedList'


describe(`@LinkedList`, () => {

    describe(`#add`, () => {

        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(5);
        

        it(`should be a function`, () => {
            expect(typeof linkedList.add).toBe('function');
        });

        it(`output should be undefined`, () => {
            expect(typeof linkedList.add(6)).toBe('undefined');
        })
    })


    describe(`#remove`, () => {

        linkedList.remove(1);
        
        it(`should be a function`, () => {
            expect(typeof linkedList.remove).toBe('function')
        });

        it(`output should be undefined`, () => {
            expect(typeof linkedList.remove(4)).toBe('undefined')
        });

    });

    describe(`#addAt`, () => {

        linkedList.addAt(1, 8);

        it(`should be a function`, () => {
            expect(typeof linkedList.addAt).toBe('function');
        });

        it(`output should be undefined`, () => {
            expect(typeof linkedList.addAt(3, 38)).toBe('undefined');
        })
    })

    describe(`#RemoveAt`, () => {

        linkedList.removeAt(22);

        it(`should be a function`, () => {
            expect(typeof linkedList.removeAt).toBe('function')
        });

        it(`output should be a number`, () => {
            expect(typeof linkedList.removeAt(2)).toBe('number')
        });
    })

    describe(`#isEmpty`, () => {
        
        it(`should be a function`, () => {
            expect(typeof linkedList.isEmpty).toBe('function')
        });

        it(`output should be a boolean`, () => {
            expect(typeof linkedList.isEmpty()).toBe('boolean')
        });

        it(`should be falsy`, () => {
            expect(linkedList.isEmpty()).toBeFalsy()
        });
    })

    describe(`#Print`, () => {

        it(`should be a function`, () => {
            expect(typeof linkedList.print).toBe('function')
        });

        it(`output should be a number`, () => {
            expect(typeof linkedList.print()).toBe('string')
        });

        it(`should contain [0]2=>[1]8=>[2]38=>[3]5=>[4]6 in the print  function`, () => {
            expect(linkedList.print()).toBe(`[0]2=>[1]8=>[2]38=>[3]5=>[4]6`)
        });
    })

    describe(`#indexOf`, () => {

        it(`should be a function`, () => {
            expect(typeof linkedList.indexOf).toBe('function')
        });

        it(`output should be a number`, () => {
            expect(typeof linkedList.indexOf()).toBe('number')
        });

        it(`index of 40 should be -1`, () => {
            expect(linkedList.indexOf(40)).toBe(-1)
        });

        it(`index of 38 should be a 2`, () => {
            expect(linkedList.indexOf(38)).toBe(2)
        });

        
    })

    describe(`#elementAt`, () => {

        it(`should be a function`, () => {
            expect(typeof linkedList.elementAt).toBe('function')
        });

        it(`output should be a number`, () => {
            expect(typeof linkedList.elementAt(1)).toBe('number')
        });

        it(`should be a function`, () => {
            expect(linkedList.elementAt(1)).toBe(8)
        });

       
    })

    describe(`#size`, () => {

        it(`should be a function`, () => {
            expect(typeof linkedList.size).toBe('function')
        })

        it(`output should be a number`, () => {
            expect(typeof linkedList.size()).toBe('number')
        })

        it(`result should be 0`, () => {
            expect(linkedList.size()).toBe(6)
        })
    })

    describe(`#head`, () => {

        it(`should be a function`, () => {
            expect(typeof linkedList.Head).toBe('function')
        })

        it(`output should be a number`, () => {
            expect(typeof linkedList.Head()).toBe('object')
        })
    })
})
