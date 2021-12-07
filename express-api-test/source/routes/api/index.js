const { Router } = require("express");
const router = Router();
const carRoutes = require("./cars");
//
router.use("/cars", carRoutes);

module.exports = router;
