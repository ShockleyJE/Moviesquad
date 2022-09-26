import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import AuthedNavbar from "../components/navbar/AuthedNavbar";
import Watchlists from "../components/watchlists/Watchlists";
import { getAllWatchlists } from "../api/watchlistAPI.js";
import NewWatchlist from "../components/watchlists/NewWatchlist";

const Dashboard = () => {
  const auth = useAuth();

  // This is example code to be used with example code below, to toggle a create watchlist form component
  const [showAdd, setAdd] = React.useState(false);
  // End example

  const [wl, setWatchlists] = React.useState({
    yours: [],
    member: [],
    admin: [],
  });

  const refreshWatchlists = () => {
    getAllWatchlists(auth.user).then((val) => setWatchlists(val));
  };

  //initialize watchlists via api on load
  useEffect(() => {
    refreshWatchlists();
  }, []);

  const deleteWatchlist = ({ _id }) => {
    setWatchlists(
      wl.filter((watchlist) => {
        return watchlist._id != _id;
      })
    );
  };

  // we pass this for the watchlist add button
  const setAddForm = () => {
    console.log("set add form");
    setAdd(true);
  };

  // End example

  // This is working example code  to show the use of an api call to catch the users watchlist
  // from the /api/ route. Note, this is not yet the users watchlist! It is a list of all watchlists
  // made before the fetch -> axios switch but similar concept

  // const [wl, setWatchlists] = React.useState([]);
  // console.log("Watchlist - Finna fetch");
  // React.useEffect(() => {
  //   fetch("api/watchlists/")
  //     // .then((res) => console.log(res))
  //     .then((res) => res.json())
  //     .then((data) => setWatchlists(data));
  // }, []);
  // console.log("Watchlist - Finished fetch");
  // console.log(wl);
  // // watchlists.watchlists.map((x) => console.log(x));
  // console.log("Watchlist - Just logged data after useEffect");

  const [what, setWhat] = useState("movie nights");
  const [counter, setCounter] = useState(0);
  //toggle this to turn on the whatis update
  const [isActive, setIsActive] = useState(false);

  console.log("In dashboard, calling API to fetch watchlists");

  if (!auth.isauthed()) {
    // Redirect
    console.log("need to redirect unauthed user");
    Navigate("/");
  } else {
    return (
      <div className="w-full max-h-full">
        <div className="">
          <AuthedNavbar></AuthedNavbar>
        </div>
        {/* placeholder layout  */}
        <div className="flex m-4">
          <div class="lg:w-2/3 w-full bg-transparent h-screen pr-4">
            {/* NOTE: To enable the spillover behavior again, change all three values for h- to h-1/3 */}
            <div class="bg-inherit">
              <Watchlists
                type="Personal"
                watchlists={wl.yours}
                deleteWatchlist={deleteWatchlist}
                setAddForm={setAddForm}
                refreshWatchlists={refreshWatchlists}
              ></Watchlists>
            </div>
            <div class="h-fit bg-inherit pt-4">
              <Watchlists
                type="Shared"
                watchlists={wl.member}
                deleteWatchlist={deleteWatchlist}
                setAddForm={setAddForm}
                refreshWatchlists={refreshWatchlists}
              ></Watchlists>
            </div>
          </div>

          <div class="lg:w-1/3 bg-transparent h-screen">
            {/* NOTE 1: This is example code to show how to do a ternary without else, in the example of toggling the create watchlist form */}
            {showAdd == true && (
              <NewWatchlist
                refreshWatchlists={refreshWatchlists}
                setAdd={setAdd}
              ></NewWatchlist>
            )}
          </div>
        </div>
      </div>
    );
  }
};
export default Dashboard;
