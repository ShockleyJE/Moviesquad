const express = require("express");
const router = express.Router();
const watchlistsController = require("../controllers/watchlists");
const { ensureAuth } = require("../middleware/auth");

router.get("/", watchlistsController.getWatchlists);

router.post("/", watchlistsController.createWatchlist);

router.get("/:id", watchlistsController.getWatchlist);

router.get("/user/:id", watchlistsController.getUserWatchlists);

//router.get("/create/", ensureAuth, watchlistsController.createWatchlistForm);

router.delete("/:id", watchlistsController.deleteWatchlist);

router.put("/:id", watchlistsController.updateWatchlist);

module.exports = router;
