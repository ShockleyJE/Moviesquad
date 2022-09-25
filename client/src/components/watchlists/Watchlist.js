import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAuth } from "../../context/AuthProvider";
import { deleteWatchlist } from "../../api/watchlistAPI.js";

const Watchlist = ({ name, _id, refreshWatchlists }) => {
  const auth = useAuth();

  const onDelete = () => {
    deleteWatchlist(auth.user, _id).then(() => refreshWatchlists());
  };

  return (
    <div
      key={_id}
      className="flex rounded-lg dark:bg-gray-300 dark:text-gray-700 shadow p-4 justify-between"
    >
      <p>{name}</p>
      <FaTimes
        className="dark:text-red-600 text-l mt-1"
        onClick={() => onDelete()}
      />
    </div>
  );
};

export default Watchlist;
