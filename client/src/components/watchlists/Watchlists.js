import React, { useState } from "react";
import Watchlist from "./Watchlist";

const Watchlists = ({ watchlists, deleteWatchlist, type }) => {
  return (
    <div className="space-y-4 rounded-lg dark:bg-gray-800 dark:text-gray-300 p-4 sm:p-4 lg:p-4 ">
      <span class="text-3xl">{type} Watchlists</span>
      {watchlists.map((wl) => (
        <Watchlist
          name={wl.name}
          _id={wl._id}
          deleteWatchlist={deleteWatchlist}
        ></Watchlist>

        // This is OK-
        // <p>{wl.name}</p>
      ))}
    </div>
  );
};

export default Watchlists;
