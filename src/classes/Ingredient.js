
class Ingredient {
    name = ""
    isAllergen = false

    constructor(name, isAllergen) {
        if (!name) throw new Error("no name specified")
        if (isAllergen == undefined) throw new Error("no isAllergen specified")

        this.name = name
        this.isAllergen = isAllergen
    }
}

module.exports = {Ingredient}