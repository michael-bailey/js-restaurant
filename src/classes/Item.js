
class Item {
    name = ""
    ingredients = []
    price

    static default = new Item("std dish", [], 10.00)

    constructor(name, ingredients, price) {
        if (!name) throw new Error("no name provided")
        if (!ingredients) throw new Error("no ingredients provided")
        if (!price) throw new Error("no price provided")

        this.name = name
        this.ingredients = ingredients
        this.price = price
    }

    getAllergens() {
        return this.ingredients.filter(i => i.isAllergen)
    }
}

module.exports = {Item}