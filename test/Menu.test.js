const {Item} = require("../src/classes/Item")
const {Menu} = require("../src/classes/Menu")

describe("menu tests", () => {
    test("test menu creation", async (done) => {
        
        let menu = await new Menu({name: "Main Menu"})

        expect(menu instanceof Menu).toBeTruthy()

        expect(() => {new Menu()}).toThrow()
        expect(() => {new Menu("menu")}).toThrow()

        done()
    })
})