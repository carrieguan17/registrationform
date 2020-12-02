DROP TABLE IF EXISTS registration;
CREATE TABLE registration (
  userId INTEGER PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  gender TEXT,
  dataOfBirth TEXT,
  phoneNumber TEXT
)
