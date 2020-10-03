const {Ingredient} = require("../src/classes/Ingredient")

describe("Ingredient tests", () => {
    test("test Ingredient creation", async (done) => {
        let ingredient1 = await new Ingredient({name: "Cashew", isAllergen: true})

        expect(ingredient1 instanceof Ingredient).toBeTruthy()
        expect(ingredient1.name).toEqual("Cashew")
        expect(ingredient1.isAllergen).toBeTruthy()

        let ingredient2 = await new Ingredient({name: "mince meat", isAllergen: false})

        expect(ingredient2 instanceof Ingredient).toBeTruthy()
        expect(ingredient2.name).toEqual("mince meat")
        expect(ingredient2.isAllergen).toBeFalsy()

        expect(() => {new Ingredient()}).toThrow()
        expect(() => {new Ingredient("Cashew")}).toThrow()

        done()
    })

    test("get item by id from db", async (done) => {
        let i = await Ingredient.getInstanceById(1)

        expect(i instanceof Ingredient).toBeTruthy()
        expect(i.name).toEqual("Cashew")
        expect(i.isAllergen).toBeTruthy()
        done()
    })
})