const { db } = require("../database")

class Item {
    name = ""
    price = 0.00
    menuID = 0

    static default = new Item({name: "std dish", price: 10.00})

    static async getInstanceById() {
        return new Promise((res,rej) => {
            db.all(`SELECT * FROM items WHERE id=${id}`, (err, rows) => {
                if (err) rej(err)
                res(new Item(rows[0]))
            })
        })
        rej(undefined)
    }

    constructor(data) {

        if (!data.name) throw new Error("no name provided")
        if (!data.price) throw new Error("no price provided")

        this.id
        this.name = data.name
        this.price = data.price
        this.menuID = data.menuID

        if (this.id) {

            // if id exists then retrun a resolved promise
            return Promise.resolve(this)
        } else {
            // reassign this to a variable
            let newItem = this

            return new Promise((res, rej) => {
                // attmpt to create a table
                db.all("CREATE TABLE IF NOT EXISTS items(id INTEGER PRIMARY KEY, name TEXT, price FLOAT, menuID INTEGER)", function(err) {
                    if (err) console.log(err)

                    // attempt to insert the new object into the database
                    db.run("INSERT INTO items(name, price, menuID) VALUES(?,?,?)", [this.name, this.price, this.menuID], function(err) {
                        if (err) console.log(err);

                        newItem.id = this.lastID
                        res(newItem)
                    })
                })
            })
        }
    }
}

module.exports = {Item}