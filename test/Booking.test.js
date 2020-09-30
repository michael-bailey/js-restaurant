const {Booking} = require("../src/classes/Booking")

// date format 'YYYY-MM-DDThh:mm:SS'

describe("Booking tests", () => {
    test("test Booking creation", () => {
        let booking = new Booking('michael', "028 9649 6000", "2020-10-25T15:00:00")

        expect(booking instanceof Booking).toBeTruthy()
        expect(booking.time).toEqual(new Date("2020-10-25T15:00:00"))
        expect(booking.groupName).toEqual("michael")
        expect(booking.contactNumber).toEqual("028 9649 6000")

        expect(() => new Booking()).toThrow()
        expect(() => new Booking("michael")).toThrow()
        expect(() => new Booking("michael", "028 9649 6000")).toThrow()
    })

    test("test expirey", () => { 
        let bookingNotExpired = new Booking('michael', "028 9649 6000", "2020-10-25T15:00:00")
        let bookingHasExpired = new Booking('michael', "028 9649 6000", "2019-10-25T15:00:00")

        expect(bookingNotExpired.isExpired()).toBeFalsy()
        expect(bookingHasExpired.isExpired()).toBeTruthy()
    })
})