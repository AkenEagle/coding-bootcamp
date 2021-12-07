const express = require("express");
// Import the connection object
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to the database before starting the Express.js server

app.use(routes);

const init = async () => {
  await sequelize.sync();

  app.listen(PORT, () => console.log(`Now listening http://localhost:${PORT}`));
};

init();
