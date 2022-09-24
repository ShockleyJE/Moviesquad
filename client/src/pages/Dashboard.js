import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import AuthedNavbar from "../components/navbar/AuthedNavbar";

const Dashboard = () => {
  const auth = useAuth();

  // This is example code to be used with example code below, to toggle a create watchlist form component
  //const [showAddTask, setShowAddTask] = React.useState(true);
  // End example

  // This is example code to demonstrate the watchlist components
  const [wl, setWatchlists] = React.useState([
    {
      _id: "632121cee05feb47187d563a",
      membersID: ["632121cee05feb47187d5637"],
      adminsID: ["632121cee05feb47187d5637"],
      moviesID: [],
      name: "My Watchlist",
      ownerID: "632121cee05feb47187d5637",
      __v: 0,
    },
    {
      _id: "63262e573ba01f6438e73b07",
      membersID: ["63262e573ba01f6438e73b04"],
      adminsID: ["63262e573ba01f6438e73b04"],
      moviesID: [],
      name: "Shared Watchlist",
      ownerID: "63262e573ba01f6438e73b04",
      __v: 0,
    },
    {
      _id: "63262e573ba01f6438e73b07",
      membersID: ["63262e573ba01f6438e73b04"],
      adminsID: ["63262e573ba01f6438e73b04"],
      moviesID: [],
      name: "Another Watchlist",
      ownerID: "63262e573ba01f6438e73b04",
      __v: 0,
    },
  ]);
  const addWatchlist = ({ wlname }) => {
    let wlitem = {
      _id: Math.floor(Math.random() * 10000000) + 1,
      membersID: ["63262e573ba01f6438e73b04"],
      adminsID: ["63262e573ba01f6438e73b04"],
      moviesID: [],
      name: wlname,
      ownerID: "63262e573ba01f6438e73b04",
      __v: 0,
    };

    setWatchlists(wl.concat([wlitem]));
  };
  const deleteWatchlist = ({ _id }) => {
    setWatchlists(
      wl.filter((watchlist) => {
        return watchlist._id != _id;
      })
    );
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

  if (!auth.isauthed()) {
    // Redirect
    console.log("need to redirect unauthed user");
    Navigate("/");
  } else {
    return (
      <div>
        <div className="h-fit">
          <AuthedNavbar></AuthedNavbar>
        </div>
        {/* placeholder layout  */}
        <div className="flex">
          <div class="w-2/3 bg-red-700 h-screen">
            {/* This is example code to demonstrate use of the watchlist component  with the above */}

            {/* <Watchlists
            type="Personal"
            watchlists={wl}
            deleteWatchlist={deleteWatchlist}
          ></Watchlists>
          <Watchlists
            type="Shared"
            watchlists={wl}
            deleteWatchlist={deleteWatchlist}
          ></Watchlists> */}

            {/* NOTE 1: This is example code to show how to do a ternary without else, in the example of toggling the create watchlist form */}
            {/* {showAddTask && <NewWatchlist onAdd={addWatchlist}></NewWatchlist>} */}
          </div>
          <div class="w-1/3 bg-red-400 h-screen"></div>
        </div>
      </div>
    );
  }
};
export default Dashboard;
