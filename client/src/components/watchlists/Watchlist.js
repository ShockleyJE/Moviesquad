import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useAuth } from "../../context/AuthProvider";
import { deleteWatchlist } from "../../api/watchlistAPI.js";
import { Link } from "react-router-dom";

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
      <div className="flex mt-1 w-16 justify-between">
        <Link to={`edit/${_id}`} className="">
          <FaEdit className="text-gray-600" />
        </Link>
        <FaTimes
          className="dark:text-red-600 text-l"
          onClick={() => onDelete()}
        />
      </div>
    </div>
  );
};

export default Watchlist;
