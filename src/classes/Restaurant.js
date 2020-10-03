const { db } = require("../database")

class Restaurant {
    id = -1
    name = ""
    image = ""

    static async getInstanceById(id) {
        return new Promise((res,rej) => {
            db.all(`SELECT * FROM restaurants WHERE id=${id}`, (err, rows) => {
                if (err) rej(err)
                res(new Restaurant(rows[0]))
            })
        })
    }

    // always return a promise for each call to the new restaurant
    constructor(data) {

        this.id = data.id
        this.name = data.name
        this.image = data.image

        let newRestaurant = this

        // check tp see if an id is present.
        if (this.id) {
            return Promise.resolve(this)
        } else {
            return new Promise((res, rej) => {
                db.all("CREATE TABLE IF NOT EXISTS restaurants(id INTEGER PRIMARY KEY, name TEXT, image TEXT)", (err) => {
                    if (err) rej(err)

                    db.run("INSERT INTO restaurants(name, image) VALUES(?, ?)", [this.name, this.image] ,function(err) {
                        if (err) rej(err)
                        newRestaurant.id = this.lastID
                        res(newRestaurant)
                    })
                })
            })
        }
    }
}

module.exports = {Restaurant}