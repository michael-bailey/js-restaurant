const {Booking} = require("../src/classes/Booking")

// date format 'YYYY-MM-DDThh:mm:SS'

describe("Booking tests", () => {
    test("test Booking creation", async (done) => {
        let booking = await new Booking({groupName: 'michael', contactNumber: "028 9649 6000", time: "2020-10-25T15:00:00", tableID: 1})

        expect(booking instanceof Booking).toBeTruthy()
        expect(booking.time).toEqual(new Date("2020-10-25T15:00:00"))
        expect(booking.groupName).toEqual("michael")
        expect(booking.contactNumber).toEqual("028 9649 6000")
        expect(booking.tableID).toBe(1)

        expect(() => new Booking()).toThrow()

        done()
    })

    test("test expirey", async (done) => { 
        let bookingNotExpired = await new Booking({groupName: 'test1', contactNumber: "028 9649 6000", time: "2020-10-25T15:00:00", tableID: 1})
        let bookingHasExpired = await new Booking({groupName: 'test2', contactNumber: "028 9649 6000", time: "2019-10-19T15:00:00", tableID: 1})

        expect(bookingNotExpired.isExpired()).toBeFalsy()
        expect(bookingHasExpired.isExpired()).toBeTruthy()
        done()
    })
})