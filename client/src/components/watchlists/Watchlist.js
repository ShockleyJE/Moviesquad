import React from "react";
import { FaTimes } from "react-icons/fa";

const Watchlist = ({ name, _id, deleteWatchlist }) => {
  console.log("In watchlist");
  console.log(name, _id);
  return (
    <div
      key={_id}
      className="flex rounded-lg dark:bg-gray-700 dark:text-gray-300 p-2 sm:p-2 lg:p-4 justify-between"
    >
      <p>{name}</p>
      <FaTimes
        className="dark:text-red-600 text-l"
        onClick={() => deleteWatchlist({ _id })}
      />
    </div>
  );
};

export default Watchlist;
