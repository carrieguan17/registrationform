DROP TABLE IF EXISTS registration;
CREATE TABLE user_info (
  user_id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  gender TEXT,
  data_of_birth TEXT,
  phone_number TEXT
)
