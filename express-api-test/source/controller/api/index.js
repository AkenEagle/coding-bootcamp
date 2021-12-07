const { FORCE } = require("sequelize/dist/lib/index-hints");
const { Car } = require("../../models/index");

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    return res.json({
      success: true,
      data: cars,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getCarByID = async (req, res) => {
  // Get ID from the url
  const { id } = req.params;
  try {
    const carByID = await Car.findByPk(id);

    return res.json({
      success: true,
      data: carByID,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const createCar = (req, res) => {
  return res.send("create car");
};

const updateCar = (req, res) => {
  return res.send("update car");
};

const deleteCar = (req, res) => {
  return res.send("delete car");
};

module.exports = { getAllCars, getCarByID, createCar, updateCar, deleteCar };
