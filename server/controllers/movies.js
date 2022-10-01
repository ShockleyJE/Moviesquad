const fetch = require("node-fetch");
const Movie = require("../models/Movie");
const Watchlist = require("../models/Watchlist");

module.exports = {
  getMovies: async (req, res) => {
    console.log(req.user);
    try {
      const movieItems = await Movie.find({
        userId: req.user.id,
        deleted: false,
      });
      const moviesLeft = await Movie.countDocuments({
        userId: req.user.id,
        watched: false,
        deleted: false,
      });
      const moviesDB = await Movie.find({
        recommend: true,
      });
      res.render("movies.ejs", {
        movies: movieItems,
        dbMovies: moviesDB,
        left: moviesLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getMoviesByWatchlist: async (req, res) => {
    console.log(`getMoviesByWatchlist, wl: ${req.params.id}`);
    console.log(req.body.user);
    try {
      const theWatchlist = await Watchlist.findOne({
        _id: req.params.id,
      });

      let moviePromises = theWatchlist.moviesID.map((ele) => {
        return Movie.findOne({
          _id: ele._id,
        });
      });

      theMovies = await Promise.all(moviePromises);

      console.log(
        `Found ${theMovies.length} items for watchlist ID ${req.params.id}`
      );
      res.end(
        JSON.stringify({
          movies: theMovies,
        })
      );
    } catch (err) {
      console.log(err);
    }
  },
  createMovieToWatchlist: async (req, res) => {
    try {
      const user = req.body.user;
      const movie = req.body.movie;
      const watchlistID = req.body.watchlist_id;

      if (!movie.hasOwnProperty("poster_path")) {
        movie.poster_path = "";
        movie.image = `https://moviesquad.net/public/placeholder_poster.png`;
        movie.hasImage = true;
      } else {
        movie.image = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
        movie.hasImage = false;
      }

      try {
        Movie.create({
          title: movie.title,
          image: movie.image,
          posterPath: movie.poster_path,
          userID: user._id,
          watchlistID: watchlistID,
          hasImage: movie.hasImage,
        }).then((doc) => {
          Watchlist.findOneAndUpdate(
            { _id: watchlistID },
            { $push: { moviesID: String(doc._id) } }
          ).then((wl) => {
            res.end(
              JSON.stringify({
                message: "success",
                _id: doc._id,
                wl_id: wl._id,
              })
            );
          });
        });
      } catch {
        res.end({ message: "failure" });
      }
    } catch (err) {
      res.end({ message: "failure" });
      console.log(`Exception in create movie while parsing required values:`);
    }
  },

  markWatched: async (req, res) => {
    try {
      await Movie.findOneAndUpdate(
        { _id: req.body.movieIdFromJSFile },
        {
          watched: true,
        }
      );
      console.log("Marked Watched");
      res.json("Marked Watched");
    } catch (err) {
      console.log(err);
    }
  },
  markUnWatched: async (req, res) => {
    try {
      await Movie.findOneAndUpdate(
        { _id: req.body.movieIdFromJSFile },
        {
          watched: false,
        }
      );
      console.log("Marked unwatched");
      res.json("Marked unwatched");
    } catch (err) {
      console.log(err);
    }
  },
  recommendMovie: async (req, res) => {
    try {
      await Movie.findOneAndUpdate(
        { _id: req.body.movieIdFromJSFile },
        {
          recommend: true,
        }
      );
      console.log("Recommended Movie");
      res.json("Recommended Movie");
    } catch (err) {
      console.log(err);
    }
  },
  unRecommendMovie: async (req, res) => {
    try {
      await Movie.findOneAndUpdate(
        { _id: req.body.movieIdFromJSFile },
        {
          recommend: false,
        }
      );
      console.log("Un-recommended Movie");
      res.json("Un-recommended Movie");
    } catch (err) {
      console.log(err);
    }
  },
  deleteMovie: async (req, res) => {
    console.log(req.body.movieIdFromJSFile);
    try {
      await Movie.updateOne(
        { _id: req.body.movieIdFromJSFile },
        {
          deleted: true,
        }
      );
      console.log("Show Deleted");
      res.json("Show Deleted");
    } catch (err) {
      console.log(err);
    }
  },
};
