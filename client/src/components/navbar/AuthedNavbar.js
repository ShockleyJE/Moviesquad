import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { useAuth } from "../../context/AuthProvider";

const AuthedNavbar = () => {
  const auth = useAuth();
  const usr = auth.user;
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
};

export default AuthedNavbar;
