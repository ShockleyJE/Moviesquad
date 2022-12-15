import React from "react";
import {
  deleteMovie,
  watchMovie,
  likeMovie,
  dislikeMovie,
} from "../../api/movieAPI";
import { useAuth } from "../../context/AuthProvider";
import {
  FaTimes,
  FaCheck,
  FaThumbsUp,
  FaThumbsDown,
  FaTrash,
  FaEye,
} from "react-icons/fa";

const Movie = ({ movie, updateWLFlag, setUpdateWLFlag }) => {
  const auth = useAuth();

  const onDelete = () => {
    console.log(`Deleting movie with ID: ${movie._id}`);
    deleteMovie(auth.user, movie);
    setUpdateWLFlag(updateWLFlag + 1);
  };
  const onLike = () => {
    console.log(`Liking movie with ID: ${movie._id}`);
    likeMovie(auth.user, movie);
    setUpdateWLFlag(updateWLFlag + 1);
  };
  const onDislike = () => {
    console.log(`Disliking movie with ID: ${movie._id}`);
    dislikeMovie(auth.user, movie);
    setUpdateWLFlag(updateWLFlag + 1);
  };
  const onWatch = () => {
    console.log(`Watching movie with ID: ${movie._id}`);
    watchMovie(auth.user, movie);
    setUpdateWLFlag(updateWLFlag + 1);
  };

  if (movie != null) {
    return (
      <div className="flex flex-row" key={movie._id}>
        <div
          className="flex w-32 h-48 rounded-sm bg-contain"
          style={{ backgroundImage: `url(${movie.image})` }}
        ></div>
        <div className="flex flex-col justify-end ">
          <div>
            <button
              className="btn btn-square h-6 w-8 md:w-12 lg:w-12 bg-green-200 border-green-300 text-white"
              onClick={onLike}
            >
              <FaThumbsUp className="" />
            </button>
          </div>
          <div>
            <button
              className="btn btn-square h-6 w-8 md:w-12 lg:w-12 bg-red-200 border-red-300 text-white"
              onClick={onDislike}
            >
              <FaThumbsDown className="" />
            </button>
          </div>
          <div>
            <button
              className="btn btn-square h-6 w-8 md:w-12 lg:w-12 bg-gray-500 border-gray-500 text-black text-white"
              onClick={onWatch}
            >
              <FaEye className="" />
            </button>
          </div>
          <div>
            <button
              className="btn btn-square h-6 w-8 md:w-12 lg:w-12 text-white"
              onClick={onDelete}
            >
              <FaTrash className="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Movie;
