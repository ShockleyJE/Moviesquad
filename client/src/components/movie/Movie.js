import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

const Movie = ({ movie }) => {
  const onDelete = () => {};
  const onWatch = () => {};

  if (movie != null) {
    return (
      <div className="h-fit w-fit">
        <div
          className="flex w-32 h-48 rounded-sm bg-contain m-2"
          style={{ backgroundImage: `url(${movie.image})` }}
        >
          <div className="flex container justify-between m-2">
            <FaCheck
              className="text-green-600 text-xl border-2 border-green-600  bg-white rounded-xl"
              onClick={() => onDelete()}
            />
            <FaTimes
              className="text-red-600 border-2 border-red-600 text-xl bg-white rounded-xl"
              onClick={() => onDelete()}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Movie;
