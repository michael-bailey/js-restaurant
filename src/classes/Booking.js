class Booking {
    groupName = ""
    contactNumber = ""
    time = Date.now()

    static default = new Booking("michaels group", "nil", Date.now())

    constructor(groupName, contactNumber, time) {
        if (!groupName) throw new Error("no group name")
        if (!contactNumber) throw new Error("no contact number")
        if (!time) throw new Error("no time given");

        this.groupName = groupName
        this.contactNumber = contactNumber
        this.time = new Date(time)
    }

    isExpired() {
        return this.time < Date.now()
    }
}

module.exports = {Booking}