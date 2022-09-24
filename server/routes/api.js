const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

router.get("/", apiController.getTest);
router.get("/users", apiController.getUsers);
router.get("/watchlists", apiController.getWatchlists);
router.get("/movies", apiController.getMovies);

module.exports = router;
