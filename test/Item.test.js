const { Item } = require("../src/classes/Item")
const { Ingredient } = require("../src/classes/Ingredient") 

describe("Item tests", () => {
    test("test Item creation", async (done) => {
        
        let item = await new Item({name: "Spaghetti Bolognese", price: 12.50, menuID: 1})

        expect(item instanceof Item).toBeTruthy()
        expect(item.name).toEqual("Spaghetti Bolognese")
        
        expect(() => {new Item({})}).toThrow()
        expect(() => {new Item({name: "Spaghetti Bolognese"})}).toThrow()
        done()
    })

    test('test get instance by id', async (done) => {
        let i = await Item.getInstanceById(1)

        expect(i instanceof Item).toBeTruthy()
        expect(i.name).toEqual("Spaghetti Bolognese")
        expect(i.menuID).toBeTruthy()
        done()     
    })
})