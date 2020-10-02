const { db } = require("../database")

class Booking {
    id = -1
    groupName = ""
    contactNumber = ""
    time = Date.now()
    tableID = -1

    static async getInstanceById(id) {
        return new Promise((res,rej) => {
            db.all(`SELECT * FROM bookings WHERE id=${id}`, (err, rows) => {
                if (err) rej(err)
                res(new Booking(rows[0]))
            })
        })
    }

    constructor(data) {
        if (!data.groupName) throw new Error("no group name")
        if (!data.contactNumber) throw new Error("no contact number")
        if (!data.time) throw new Error("no time given");

        this.id = data.id
        this.groupName = data.groupName
        this.contactNumber = data.contactNumber
        this.time = new Date(data.time)
        this.tableID = data.tableID

        if (this.id) {
            return Promise.resolve(this)
        } else {
            let newBooking = this

            return new Promise((res, rej) => {
                db.all("CREATE TABLE IF NOT EXISTS bookings(id INTEGER PRIMARY KEY, groupName TEXT, contactNumber TEXT, time DATE, tableID INTEGER)", (err) => {
                    if (err) rej(err)

                    db.run("INSERT INTO bookings(groupName, contactNumber, time, tableID) VALUES(?, ?, ?, ?)", [this.groupName, this.contactNumber, this.time, this.tableID], function(err) {
                        if (err) rej(err)
                        newBooking.id = this.lastID
                        res(newBooking)
                    })
                })
            })
        }
    }

    isExpired() {
        return this.time < Date.now()
    }
}

module.exports = {Booking}