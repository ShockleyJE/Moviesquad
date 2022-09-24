const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const statsController = require("../controllers/stats");

router.get("/", statsController.getStats);
router.get("/users", statsController.getUsers);

module.exports = router;
