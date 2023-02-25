
const {Hash, HashTable} = require("../Hash table/hashTable.js")

const _test_hashTable = new HashTable();

describe(`@Hash Table`, () => {

    describe(`#add`, () => {

       const typeOfAdd_Result = typeof _test_hashTable.add("Lenny", 10)

        it(`should be a function`, () => {
            expect(typeof _test_hashTable.add).toBe("function")
        })

        it(`the result should be undefined`, () => {
            expect(typeOfAdd_Result).toBe("undefined")
            //don`t return any value, add function only push in storage[index] 
        })
        

    })

    describe(`#remove`, () => {

        const typeOfRemove_Result = typeof _test_hashTable.remove("Lenny")

        it(`should be a function`, () => {
            expect(typeof _test_hashTable.remove).toBe("function")
        })

        it(`The result should be undefined`, () => {
            expect(typeOfRemove_Result).toBe("undefined")
             //don`t return any value, remove function only delete in storage[index]
        })
    })

    describe(`#lookup`, () => {
    
        _test_hashTable.add("Yael", 20);
        _test_hashTable.add("Elen", 30);
        _test_hashTable.add("Beleric", 40);
        _test_hashTable.remove("Beleric");
        
        const typeOfLookup_Result = typeof _test_hashTable.lookup("Elen")

        it(`should be a function`, () => {
            expect(typeof _test_hashTable.remove).toBe("function")
        })

        it(`The result should be a number`, () => {
            expect(typeOfLookup_Result).toBe("number")
        })

        it(`The result of 'Yael' should be 20`, () => {
            expect(_test_hashTable.lookup("Yael")).toBe(20)
        })

        it(`The result of 'Elen' should be 30`, () => {
            expect(_test_hashTable.lookup("Elen")).toBe(30)
        })

        it(`The result of 'Beleric' should be undefined`, () => {
            expect(_test_hashTable.lookup("Beleric")).toBe(undefined)
        })

        



    })


})