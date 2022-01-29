const getAll = (req, res) => {
  console.log("getAll");
  req.db
    .collection("artists")
    .find()
    .toArray((err, results) => {
      if (err) {
        return res.status(500).json({ message: "Failed to get all" });
      }
      return res.json(results);
    });
};

const getAllArtists = (req, res) => {};

const getAllSongs = (req, res) => {};

module.exports = { getAll, getAllArtists, getAllSongs };
