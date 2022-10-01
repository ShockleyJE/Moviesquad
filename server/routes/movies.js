const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, moviesController.getMovies);

router.get("/watchlist/:id", moviesController.getMoviesByWatchlist);

router.post("/watchlist/:id", moviesController.createMovieToWatchlist);

router.put("/markWatched", moviesController.markWatched);

router.put("/markUnWatched", moviesController.markUnWatched);

router.put("/recommendMovie", moviesController.recommendMovie);

router.put("/unRecommendMovie", moviesController.unRecommendMovie);

router.delete("/deleteMovie", moviesController.deleteMovie);

module.exports = router;
