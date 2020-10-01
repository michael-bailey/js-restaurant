const {Table} = require("../src/classes/Table")
const {Booking} = require("../src/classes/Booking")

describe("Table tests", () => {
    test("test Table creation", () => {
        let table1 = new Table(1, 6, [{}])

        expect(table1 instanceof Table).toBeTruthy()
        expect(table1.number).toBe(1)
        expect(table1.seats).toBe(6)

        expect(() => new Table()).toThrow()
        expect(() => new Table(1)).toThrow()
    })

    test("add booking", () => {
        let table1 = new Table(1, 6)

        expect(table1.bookings.length).toBe(0)

        table1.addBooking(Booking.default)

        expect(table1.bookings.length).toBe(1)
    })

    test("test remove booking", () => {
        let table1 = new Table(1, 6, [Booking.default])

        expect(table1.bookings.length).toBe(1)

        table1.removeBooking("michaels group")

        expect(table1.bookings.length).toBe(0)
    })

    test("clear old bookings booking", () => {
        //TODO: - add test to test cleanBookings()
        let oldBooking1 = new Booking("a", "1", "2019-10-25")
        let oldBooking2 = new Booking("a", "2", "2020-06-25")
        let oldBooking3 = new Booking("b", "3", "2019-12-25")

        let newBooking1 = new Booking("c", "4", "2021-06-01") 

        let table = new Table(1, 12, [oldBooking1,newBooking1,oldBooking2, oldBooking3])

        table.clear()

        expect(table.bookings.length).toBe(1)

    })
})