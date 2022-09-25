import React from "react";
import { useState } from "react";
import { createWatchlist } from "../../api/watchlistAPI.js";
import { useAuth } from "../../context/AuthProvider";

const NewWatchlist = ({ refreshWatchlists, setAdd }) => {
  const auth = useAuth();

  const [name, setWlName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Name me!");
      return;
    }
    //addWatchlist({ wlname });
    createWatchlist(auth.user, name);
    refreshWatchlists();

    //default the state value now
    setWlName("");

    setAdd(false);
  };

  return (
    <div class="container">
      <div className="space-y-4 rounded-lg dark:bg-gray-200 dark:text-gray-800 border-gray-800 shadow border-solid p-4">
        <form class="space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              for="name"
              class="text-3xl font-medium text-gray-900 block mb-2 text-gray-800"
            >
              New Watchlist
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setWlName(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-500"
              placeholder="choose a good name"
              required=""
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewWatchlist;
