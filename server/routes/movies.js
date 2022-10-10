const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");
//const { ensureAuth } = require("../middleware/auth");

router.get("/watchlist/:id", moviesController.getMoviesByWatchlist);

router.post("/watchlist/:id", moviesController.createMovieToWatchlist);

router.put("/watch/:id", moviesController.markWatched);

router.put("/unwatch/:id", moviesController.markUnWatched);

router.put("/like/:id", moviesController.likeMovie);

router.put("/dislike/:id", moviesController.dislikeMovie);

router.delete("/delete/:id", moviesController.deleteMovie);

module.exports = router;
