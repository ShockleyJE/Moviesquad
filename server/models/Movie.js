const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: false,
  },
  posterPath: {
    type: String,
    required: false,
  },
  hasImage: {
    type: Boolean,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  watchlistID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  liked: {
    type: Boolean,
    default: false,
  },
  disliked: {
    type: Boolean,
    default: false,
  },
  seen: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
