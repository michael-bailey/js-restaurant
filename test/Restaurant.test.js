let {Restaurant} = require("../src/classes/Restaurant")
let {db} = require("../src/database")

describe("restaurant tests", () => {
    beforeAll((done) => {
        db.run('CREATE TABLE IF NOT EXISTS restaurants(id INTEGER PRIMARY KEY, name TEXT, image TEXT);', done)
    })

    test("test restaurant creation", async (done) => {
        let restaurant = await new Restaurant({name: "The three pilchards", image: "https://www.example.com/"})

        expect(restaurant.name).toBe("The three pilchards")
        expect(restaurant.image).toBe("https://www.example.com/")
        db.all("SELECT * FROM restaurants WHERE id = 1", (err, rows) => {
            expect(rows[0].id).toBe(restaurant.id)
            done()
        })

    })
})

test('can create an instance of an restaurant from a row', (done) => {
    db.get('SELECT * FROM restaurants WHERE id=?', 1, async (err, row) => {
        const restaurant = await new Restaurant(row)
        expect(restaurant.id).toBe(1)
        expect(restaurant.name).toBe('The three pilchards')
        db.get('SELECT COUNT(id) AS total FROM restaurants;', (err, count) => {
            expect(count.total).toBe(1)
            done()
        })
    })        
})