const { Router } = require("express");
const { getAll, getAllArtists, getAllSongs } = require("../controller");

const router = Router();

router.get("/artists", getAllArtists);
router.get("/songs", getAllSongs);
router.get("/", getAll);

module.exports = router;
