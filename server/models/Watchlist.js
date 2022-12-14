const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Movie = require("./Movie");
const User = require("./User");

const WatchlistSchema = new mongoose.Schema({
  name: { type: String },
  public: { type: Boolean, default: false },
  ownerID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  creatorID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  membersID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  adminsID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  moviesID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
});

module.exports = mongoose.model("Watchlist", WatchlistSchema);
