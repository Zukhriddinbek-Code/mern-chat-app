import React from "react";
import logo from "../assets/logo.png";

const AuthLayout = ({ children }) => {
  return (
    <>
      <header className="flex justify-center item-center py-3 h-20 shadow-md">
        <img src={logo} alt="logo" width="180" height="60" />
      </header>
      {children}
    </>
  );
};

export default AuthLayout;
