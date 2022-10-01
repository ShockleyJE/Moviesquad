const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  // watched: {
  //   type: Boolean,
  //   default: false,
  // },
  // recommend: {
  //   type: Boolean,
  //   default: false,
  // },
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
});

module.exports = mongoose.model("Movie", MovieSchema);
