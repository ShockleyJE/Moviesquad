import React, { useState } from "react";
import Watchlist from "./Watchlist";
import { FaPlus } from "react-icons/fa";

const Watchlists = ({
  watchlists,
  deleteWatchlist,
  type,
  setAddForm,
  refreshWatchlists,
}) => {
  // Will: Disable this guard clause to enable spillover

  //if (type !== "Personal") {
  //  return (
  //    <div className="space-y-4 rounded-lg dark:bg-gray-200 dark:text-gray-800 p-4">
  //      <span class="text-3xl">{type} Watchlists</span>
  //      <p>Stay tuned for shared and social features, coming October 8th</p>
  //    </div>
  //  );
  //}

  return (
    <div className="space-y-4 rounded-lg dark:bg-gray-200 dark:text-gray-800 border-gray-800 shadow border-solid p-4">
      <div className="flex justify-between">
        <span class="text-3xl">{type} Watchlists</span>
        <FaPlus
          className="self-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 h-8 w-8 p-1 text-white"
          onClick={() => setAddForm()}
        ></FaPlus>
      </div>
      {watchlists.map((wl) => (
        <Watchlist
          name={wl.name}
          _id={wl._id}
          refreshWatchlists={refreshWatchlists}
        ></Watchlist>

        // This is OK-
        // <p>{wl.name}</p>
      ))}
    </div>
  );
};

export default Watchlists;
