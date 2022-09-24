import React from "react";
import { useState } from "react";

const NewWatchlist = ({ onAdd }) => {
  const [wlname, setWlName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!wlname) {
      alert("Name me!");
      return;
    }
    onAdd({ wlname });

    //default the state value now
    setWlName("");
  };

  return (
    <div class="max-w-2xl mx-auto">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-800">
        <form class="space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              for="name"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Watchlist Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={wlname}
              onChange={(e) => setWlName(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="choose a good one"
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
