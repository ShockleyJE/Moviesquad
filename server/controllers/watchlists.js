const fetch = require("node-fetch");
const Movie = require("../models/Movie");
const Watchlist = require("../models/Watchlist");

module.exports = {
  getWatchlists: async (req, res) => {
    // get the watchlists the user is/are personal, member of, and admin of
    console.log(req.user);
    try {
      const yourWatchlists = await Watchlist.find({
        ownerID: req.user._id,
      });
      const memberOfWatchlists = await Watchlist.find({
        $expr: {
          $in: [req.user._id, "$membersID"],
        },
      });
      const adminOfWatchlists = await Watchlist.find({
        $expr: {
          $in: [req.user._id, "$adminsID"],
        },
      });
      console.log(yourWatchlists);
      console.log(memberOfWatchlists);
      console.log(adminOfWatchlists);
      res.end(
        JSON.stringify({
          yours: yourWatchlists,
          member: memberOfWatchlists,
          admin: adminOfWatchlists,
        })
      );
    } catch (err) {
      console.log(err);
    }
  },

  createWatchlist: async (req, res) => {
    // default watchlist name or submitted one
    let watchlistName =
      req.body.watchlistName == undefined
        ? `${req.user.userName}'s watchlist`
        : req.body.watchlistName;
    try {
      Watchlist.create({
        name: watchlistName,
        ownerID: req.user._id,
        membersID: req.user._id,
        adminsID: req.user._id,
      });
      console.log("Watchlist has been added!");
      res.redirect("/watchlists");
    } catch (err) {
      console.log(err);
    }
  },

  deleteWatchlist: async (req, res) => {
    console.log(req.body.watchlist._id);
    try {
      await Watchlist.deleteOne(
        { _id: req.body._id },
        {
          deleted: true,
        }
      );
      console.log("Watchlist Deleted");
      res.json("Watchlist Deleted");
    } catch (err) {
      console.log(err);
    }
  },
};
