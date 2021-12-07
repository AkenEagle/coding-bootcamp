const Sequelize = require("sequelize");
// Create a connection object
const sequelize = new Sequelize(
  // Database name
  "cars_db",
  // User
  "root",
  // Password
  "Password123!!",
  {
    // Database location
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);
module.exports = sequelize;
