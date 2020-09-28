const {Ingredient} = require("../src/classes/Ingredient")

describe("Ingredient tests", () => {
    test("test Ingredient creation", () => {
        let ingredient1 = new Ingredient("Cashew", true)

        expect(ingredient1 instanceof Ingredient).toBeTruthy()
        expect(ingredient1.name).toEqual("Cashew")
        expect(ingredient1.isAllergen).toBeTruthy()

        let ingredient2 = new Ingredient("mince meat", false)

        expect(ingredient2 instanceof Ingredient).toBeTruthy()
        expect(ingredient2.name).toEqual("mince meat")
        expect(ingredient2.isAllergen).toBeFalsy()

        expect(() => {new Ingredient()}).toThrow()
        expect(() => {new Ingredient("Cashew")}).toThrow()
    })
})