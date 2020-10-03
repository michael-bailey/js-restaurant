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
})