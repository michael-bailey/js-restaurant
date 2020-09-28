const { Item } = require("../classes/Item")

class Menu {
    name = ""
    items = []

    constructor(name, items = []) {
        if (!name) throw new Error("no name passed")

        if (items.map(item => item instanceof Item).includes(false)) throw new Error("an item passed is not an Item")

        this.name = name
        this.items = items
    }

    getItem(name) {
        return this.items.filter(item => item.name.includes(name))[0];
    }

    addItem(item) {
        if (!(item instanceof Item)) throw new Error("item is not a type of Item")

        this.items.push(item)
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name != name)
    }
}

module.exports = {Menu}