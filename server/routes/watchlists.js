const express = require("express");
const router = express.Router();
const watchlistsController = require("../controllers/watchlists");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, watchlistsController.getWatchlists);

//router.get("/create/", ensureAuth, watchlistsController.createWatchlistForm);

router.post("/create", watchlistsController.createWatchlist);

router.delete("/delete", watchlistsController.deleteWatchlist);

module.exports = router;
