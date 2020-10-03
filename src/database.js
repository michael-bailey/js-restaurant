const {Database} = require("sqlite3")
const location = process.env.NODE_ENV === 'test' ? ':memory:' : './db.sqlite'
let db = new Database(location)

module.exports = {db}