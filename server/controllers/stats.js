const passport = require("passport");
const validator = require("validator");
const Movie = require("../models/Movie");
const User = require("../models/User");

module.exports = {
  getStats: async (req, res) => {
    try {
      const uniqueItems = await Movie.countDocuments({
        deleted: false,
      });
      res.render("stats.ejs", {
        countUnique: uniqueItems,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getUsers: async (req, res) => {
    try {
      const uniqueUsers = await User.countDocuments();
      res.json({ uniqueUsers: uniqueUsers });
    } catch (err) {
      console.log(err);
    }
  },
};
