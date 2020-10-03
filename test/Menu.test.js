const {Item} = require("../src/classes/Item")
const {Menu} = require("../src/classes/Menu")

describe("menu tests", () => {
    test("test menu creation", async (done) => {
        
        let menu = await new Menu({name: "Main Menu", restaurantID: 1})

        expect(menu instanceof Menu).toBeTruthy()

        expect(() => {new Menu()}).toThrow()
        expect(() => {new Menu("menu")}).toThrow()

        done()
    })

    test('test get instance by id', async (done) => {
        let i = await Menu.getInstanceById(1)

        expect(i instanceof Menu).toBeTruthy()
        expect(i.name).toEqual("Main Menu")
        expect(i.restaurantID).toBeTruthy()
        done()     
    })
})