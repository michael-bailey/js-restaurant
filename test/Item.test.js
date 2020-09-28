const { Item } = require("../src/classes/Item")
const { Ingredient } = require("../src/classes/Ingredient") 

describe("Item tests", () => {
    test("test Item creation", () => {
        let pasta = new Ingredient("pasta", true)
        let meat = new Ingredient("mince beef", false)
        let Tomatoes = new Ingredient("Tomato", false)
        
        let item = new Item("Spaghetti Bolognese", [pasta, meat, Tomatoes], 12.50)

        expect(item instanceof Item).toBeTruthy()
        expect(item.name).toEqual("Spaghetti Bolognese")
        expect(item.ingredients.length).toEqual(3)
        
        expect(() => {new Item()}).toThrow()
        expect(() => {new Item("Spaghetti Bolognese")}).toThrow()
        expect(() => {new Item("Spaghetti Bolognese", [pasta, meat, Tomatoes])}).toThrow()
    })

    test("test get allergens", () => {
        let pasta = new Ingredient("pasta", true)
        let meat = new Ingredient("mince beef", false)
        let Tomatoes = new Ingredient("Tomato", false)
        
        let item = new Item("Spaghetti Bolognese", [pasta, meat, Tomatoes], 12.50)

        expect(item.getAllergens()).toEqual([pasta])
    })
})