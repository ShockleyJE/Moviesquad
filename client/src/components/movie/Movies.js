import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { getMoviesByWatchlist } from "../../api/movieAPI.js";
import Movie from "./Movie";

const Movies = ({ _id }) => {
  const auth = useAuth();
  const [movies, setMovies] = React.useState(null);

  const refreshMovies = () => {
    getMoviesByWatchlist(auth.user, _id).then((val) => {
      let movies = val.movies.filter((ele) => ele !== null);
      setMovies(movies);
    });
  };

  React.useEffect(() => refreshMovies(), []);

  return (
    <div className="flex flex-wrap">
      {movies !== null &&
        movies.map((movie) => <Movie key={movie._id} movie={movie}></Movie>)}
    </div>
  );
};

export default Movies;
