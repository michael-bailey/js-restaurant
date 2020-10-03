let {Restaurant} = require("../src/classes/Restaurant")
let {db} = require("../src/database")

describe("restaurant tests", () => {
    test("test restaurant creation", async (done) => {
        let restaurant = await new Restaurant({name: "The three pilchards", image: "https://www.example.com/"})

        expect(restaurant.name).toBe("The three pilchards")
        expect(restaurant.image).toBe("https://www.example.com/")
        db.all("SELECT * FROM restaurants WHERE id = 1", (err, rows) => {
            expect(rows[0].id).toBe(restaurant.id)
            done()
        })
    })

    test('test get instance by id', async (done) => {
        let i = await Restaurant.getInstanceById(1)

        expect(i instanceof Restaurant).toBeTruthy()
        expect(i.name).toEqual("The three pilchards")
        expect(i.image).toBeTruthy()
        done()     
    })
})

