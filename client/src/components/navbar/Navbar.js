import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { useAuth } from "../../context/AuthProvider";

const Navbar = () => {
  const auth = useAuth();
  const usr = auth.user;

  if (auth.user) {
    return (
      // bg-gradient-to-r from-purple-500 to-pink-500
      <div className="pl-8 pr-8 h-20 bg-transparent flex content-center justify-between text-aquamarine ">
        <div className="self-center">
          <Link to="/watchlists" className="">
            <Logo className=""></Logo>
          </Link>
        </div>
        <div className="self-center font-bold flex">
          <Link to="/profile">
            <img src={usr.profileImage} className="rounded-full h-14"></img>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      // top-0 fixed
      //bg-gradient-to-r from-purple-500 to-pink-500
      <div className="h-20 bg-transparent flex content-center justify-between text-aquamarine pl-8 pr-8 ">
        <div className="self-center">
          <Link to="/" className="">
            <Logo className=""></Logo>
          </Link>
        </div>
        <div className="self-center font-bold">
          <Link
            to="/login"
            className="rounded-full dark:bg-gray-400 dark:border-none border-aquamarine border-2 pl-8 pr-8 pb-2 pt-2 mr-8"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="rounded-full text-gray-400 bg-aquamarine outline-aquamarine pl-8 pr-8 pb-2 pt-2"
          >
            Create a free account
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
