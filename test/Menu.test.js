const {Item} = require("../src/classes/Item")
const {Menu} = require("../src/classes/Menu")

describe("menu tests", () => {
    test("test menu creation", () => {
        
        let menu = new Menu("Main Menu", [Item.default, Item.default])

        expect(menu instanceof Menu).toBeTruthy()
        expect(menu.items.length).toBe(2)
        expect(menu.items).toEqual([Item.default, Item.default])

        expect(() => {new Menu()}).toThrow()
    })

    test("test menu get item", () => {
        let menu = new Menu("Main Menu")

        menu.addItem(Item.default)

        expect(menu.getItem(Item.default.name)).toEqual(Item.default)

    })

    test("test menu add item", () => {
        let menu = new Menu("Main Menu")

        menu.addItem(Item.default)


        expect(menu.items.length).toBe(1)
        expect(menu.items).toEqual([Item.default])
    })

    test("test menu remove item", () => {
        let menu = new Menu("Main Menu")

        menu.addItem(Item.default)
        menu.removeItem(Item.default.name)

        expect(menu.items.length).toBe(0)
        expect(menu.items).toEqual([])
    })
})