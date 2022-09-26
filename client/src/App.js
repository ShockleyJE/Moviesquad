import React, { useState, useRef, useContext } from "react";
import { Route, Link, Routes } from "react-router-dom";
import WatchlistsPage from "./pages/WatchlistDetails";
import Logerino from "./pages/Logerino";
import NewWatchlist from "./components/watchlists/NewWatchlist";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Signerino from "./pages/Signerino";
import Dashboard from "./pages/Dashboard";
import WatchlistDetails from "./pages/WatchlistDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Logerino />}></Route>
        <Route path="/watchlists" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signerino />}></Route>
        <Route
          path="/watchlists/edit/:wlid"
          element={<WatchlistDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
