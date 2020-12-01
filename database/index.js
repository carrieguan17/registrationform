const sqlite3 = require('sqlite3').verbose()

// open database in memory
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite DB')
})

// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.err(err.message);
//   }
//   console.log('Close the DB connection')
// })

module.exports = {
  db: db
}