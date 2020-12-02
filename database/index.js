const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('/Users/berryblu/Desktop/assignment/projects/registrationform/registration.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the registration SQlite DB')
})

// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.err(err.message);
//   }
//   console.log('Close the DB connection')
// })

var registerUser = function (userData, callback) {
  db.run(`INSERT INTO registration(firstName, lastName, gender, dataOfBirth, phoneNumber) VALUES(?, ?, ?, ?, ?)`, [`${userData.firstName}, ${userData.lastName}, ${userData.gender}, ${userData.dataOfBirth}, ${userData.phoneNumber}`], (err, result) => {
    if(err) {
      callback(err)
      console.log("Error posting user info", err)
    } else {
      callback(null, result);
      console.log("User registration success")
    }
  })
}

module.exports = {
  db: db,
  registerUser: registerUser
}