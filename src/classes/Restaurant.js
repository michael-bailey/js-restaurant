const { db } = require("../database")

class Restaurant {
    id = -1
    name = ""
    image = ""

    // always return a promise for each call to the new restaurant
    constructor(data) {

        this.id = data.id
        this.name = data.name
        this.image = data.image

        let restaurant = this

        // check tp see if an id is present.
        if (this.id) {
            return Promise.resolve(this)
        } else {
            return new Promise((res, rej) => {
                db.run("INSERT INTO restaurants(name, image) VALUES(?, ?)", [this.name, this.image] ,function(err) {
                    restaurant.id = this.lastID
                    if (err) rej(err)
                    res(restaurant)
                })
            })
        }
    }
}

module.exports = {Restaurant}