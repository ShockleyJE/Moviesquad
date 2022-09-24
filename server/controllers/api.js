const fetch = require("node-fetch");
const Movie = require("../models/Movie");
const Watchlist = require("../models/Watchlist");
const User = require("../models/User");

module.exports = {
  getTest: async (req, res) => {
    res.json({ message: "Message from api getTest" });
  },
  getWatchlists: async (req, res) => {
    try {
      const watchlists = await Watchlist.find({}).lean();
      res.end(JSON.stringify({ watchlists }));
    } catch (err) {
      console.log(err);
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.json({ users });
    } catch (err) {
      console.log(err);
    }
  },
  getMovies: async (req, res) => {
    try {
      const movies = await Movie.find({});
      res.json({ movies });
    } catch (err) {
      console.log(err);
    }
  },
};
