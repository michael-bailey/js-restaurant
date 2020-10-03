const { db } = require("../database")

class Table {
    id = -1
    seats = 0
    number = 0
    restaurantID = -1

    constructor(data) {
        if (!data.number) throw new Error("no name given")
        if (!data.seats) throw new Error("no seat number given")

        this.id = data.id
        this.number = data.number
        this.seats = data.seats
        this.restaurantID = data.restaurantID

        if (this.id) {
            return Promise.resolve(this)
        } else {
            var newTable = this

            return new Promise((res, rej) => {
                db.all("CREATE TABLE IF NOT EXISTS tables(id INTEGER PRIMARY KEY, number INTEGER, seats INTEGER, restaurantID INTEGER)", (err) => {
                    if (err) rej(err)

                    db.run("INSERT INTO tables(number, seats, restaurantID) VALUES(?, ?, ?)", [this.numebr, this.seats, this.restaurantID] ,function(err) {
                        if (err) rej(err)
                        newTable.id = this.lastID
                        res(newTable)
                    })
                })
            })
        }
    }
}

module.exports = {Table}