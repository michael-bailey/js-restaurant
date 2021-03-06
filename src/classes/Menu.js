const { Item } = require("../classes/Item")
const { db } = require("../database")

class Menu {
    id = -1
    name = ""
    restaurantID = -1

    static async getInstanceById(id) {
        return new Promise((res,rej) => {
            db.all(`SELECT * FROM menus WHERE id=${id}`, (err, rows) => {

                if (err) rej(err)
                res(new Menu(rows[0]))
            })
        })
    }

    constructor(data) {
        
        if (!data.name) throw new Error("no name passed")

        this.id = data.id
        this.name = data.name
        this.restaurantID = data.restaurantID

        if (this.id) {
            return Promise.resolve(this)
        } else {
            let newMenu = this

            return new Promise((res, rej) => {

                // attept to create new table
                db.all("CREATE TABLE IF NOT EXISTS menus(id INTEGER PRIMARY KEY, name TEXT, restaurantID INTEGER)", (err) => {
                    if (err) rej(err)

                    db.run("INSERT INTO menus(name, restaurantID) VALUES(?,?)", [this.name, this.restaurantID], function() {
                        if (err) rej(err)

                        newMenu.id = this.lastID
                        res(newMenu)
                    })
                })
            });
        }
    }
}

module.exports = {Menu}