const { Router } = require("express");
const {
  getAllCars,
  getCarByID,
  createCar,
  updateCar,
  deleteCar,
} = require("../../controller/api");
const router = Router();

router.get("/", getAllCars);
router.get("/:id", getCarByID);
router.post("/", createCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
