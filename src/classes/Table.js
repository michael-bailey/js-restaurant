const {Booking} = require("./Booking")

class Table {
    seats = 0
    number = 0
    bookings = []

    constructor(number, seats, bookings = []) {
        if (!number) throw new Error("no name given")
        if (!seats) throw new Error("no seat number given")

        this.number = number
        this.seats = seats
        this.bookings = bookings
    }

    addBooking(booking) {
        if (!booking instanceof Booking)  throw new Error("not instance of booking")

        this.bookings.push(booking)
    }

    removeBooking(name) {
        if (name == undefined) throw new Error("no string provided")

        this.bookings = this.bookings.filter(item => item.groupName != name)
    }

    clear() {
        this.bookings = this.bookings.filter(item => item.time > Date.now())
    }
}

module.exports = {Table}