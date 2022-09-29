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
  getWatchlist: async (req, res) => {
    // get the watchlists the user is/are personal, member of, and admin of
    console.log(req.params.id);
    try {
      const theWatchlist = await Watchlist.findOne({
        _id: req.params.id,
      });
      console.log(theWatchlist);
      res.end(JSON.stringify(theWatchlist));
    } catch (err) {
      console.log(err);
    }
  },
  getUserWatchlists: async (req, res) => {
    // get the watchlists the user is/are personal, member of, and admin of
    console.log(req.params.id);
    try {
      const yourWatchlists = await Watchlist.find({
        ownerID: req.params.id,
      });
      const memberOfWatchlists = await Watchlist.find({
        $expr: {
          $in: [req.params.id, "$membersID"],
        },
      });
      const adminOfWatchlists = await Watchlist.find({
        $expr: {
          $in: [req.params.id, "$adminsID"],
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
    let wl;
    let watchlistName =
      req.body.name == undefined
        ? `${req.user.userName}'s watchlist`
        : req.body.name;
    try {
      Watchlist.create({
        name: watchlistName,
        ownerID: req.body.user._id,
        membersID: req.body.user._id,
        adminsID: req.body.user._id,
      }).then((doc) => {
        console.log("Watchlist has been added!");
        res.end(JSON.stringify({ message: "success", _id: doc._id }));
      });
    } catch (err) {
      console.log(err);
    }
  },

  deleteWatchlist: async (req, res) => {
    console.log(req.params.id);
    try {
      await Watchlist.deleteOne(
        { _id: req.params.id },
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

  updateWatchlist: async (req, res) => {
    console.log(req.params.id);
    try {
      await Watchlist.findOneAndUpdate(
        { _id: req.params.id },
        req.body.watchlist
      ).then((wl) => {
        console.log("Watchlist updated");
        res.json(JSON.stringify(wl));
      });
    } catch (err) {
      console.log(err);
    }
  },
};
