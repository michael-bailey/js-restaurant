const {Table} = require("../src/classes/Table")
const {Booking} = require("../src/classes/Booking")

describe("Table tests", () => {
    test("test Table creation", async (done) => {

        // TODO - update this test
        let table1 = await new Table({number: 1, seats: 6})

        expect(table1 instanceof Table).toBeTruthy()
        expect(table1.number).toBe(1)
        expect(table1.seats).toBe(6)

        expect(() => new Table({})).toThrow()
        done()
    })

    test('test get instance by id', async (done) => {
        let i = await Table.getInstanceById(1)

        expect(i instanceof Table).toBeTruthy()
        expect(i.number).toBe(1)
        expect(i.seats).toBe(6)
        done()     
    })
})