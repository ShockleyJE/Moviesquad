import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { getMoviesByWatchlist } from "../../api/movieAPI.js";
import Movie from "./Movie";

const Movies = ({ _id, wl }) => {
  const auth = useAuth();
  const [movies, setMovies] = React.useState(null);

  const refreshMovies = () => {
    getMoviesByWatchlist(auth.user, _id).then((val) => {
      let movies = val.movies.filter((ele) => ele !== null);
      setMovies(movies);
    });
  };

  React.useEffect(() => refreshMovies(), [wl]);

  return (
    <div className="flex flex-wrap">
      {movies !== null &&
        movies.map((movie) => (
          <div className="p-2">
            <Movie key={movie._id} movie={movie}></Movie>
          </div>
        ))}
    </div>
  );
};

export default Movies;
