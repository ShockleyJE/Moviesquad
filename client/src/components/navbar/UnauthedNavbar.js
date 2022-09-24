import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const UnauthedNavbar = () => {
  return (
    // top-0 fixed
    <div className="w-screen h-20 bg-transparent flex content-center justify-between text-aquamarine pl-8 pr-8 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="self-center">
        <Link to="/" className="">
          <Logo className=""></Logo>
        </Link>
      </div>
      <div className="self-center font-bold">
        <Link
          to="/login"
          className="rounded-full bg-gray-400 pl-8 pr-8 pb-2 pt-2 mr-8"
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
};

export default UnauthedNavbar;
