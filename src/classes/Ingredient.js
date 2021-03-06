const {db} = require("../database")


// TODO: - rewriting in a async mode and implemting database methids (not 3rd degree normalised)
class Ingredient {
    id = -1
    name = ""
    isAllergen = false
    itemID = -1

    static async getInstanceById(id) {
        return new Promise((res,rej) => {
            db.all(`SELECT * FROM ingredients WHERE id=${id}`, (err, rows) => {
                if (err) rej(err)
                res(new Ingredient(rows[0]))
            })
        })
    }

    constructor(data) {

        if (!data.name) throw new Error("no name specified")
        if (data.isAllergen == undefined) throw new Error("no isAllergen specified")

        this.name = data.name
        this.isAllergen = data.isAllergen
        this.itemID = data.itemID

        if (data.id) {

            // if there is an id then resolve the promise and return this
            return Promise.resolve(this)

        } else {
            // Reassign 
            var newIngredient = this

            return new Promise((res, rej) => {

                // attempt to create a new table in the db
                db.all("CREATE TABLE IF NOT EXISTS ingredients(id INTEGER PRIMARY KEY, name TEXT, isAllergen BOOL, itemID INTEGER)", (err) => {
                    if (err) rej(err)

                    // attempt to insert the new object into the db
                    db.run("INSERT INTO ingredients(name, isAllergen, itemID) VALUES(?,?,?)", [this.name, this.isAllergen, this.itemID], function(err) {
                        if (err) console.log(err);

                        // assign the new id of the object
                        newIngredient.id = this.lastID
                        res(newIngredient)
    
                    })
                })
            })
        }
    }
}

module.exports = {Ingredient}