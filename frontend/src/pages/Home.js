/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import openSocket from "socket.io-client";

import { logout, setUser } from "../redux/userSlice";
import Sidebar from "../components/Sidebar";
import logo from "../assets/logo.png";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);

  const fetchUserDetails = async () => {
    try {
      const url = `${process.env.REACT_APP_backend_url}auth/user-details`;
      const userDetails = await axios({ url: url, withCredentials: true });

      dispatch(setUser(userDetails.data.data));

      if (userDetails.data.data.logout) {
        dispatch(logout());
        navigate("/email");
        // localStorage.removeItem("token");
      }
      // console.log(userDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  });

  //socket connection
  useEffect(() => {
    const socketConnection = openSocket(process.env.REACT_APP_backend_url, {
      auth: { token: localStorage.getItem("token") },
    });

    return () => {
      socketConnection.disconnect();
    };
  });

  const basePath = location.pathname === "/";

  return (
    <div className="grid lg:grid-cols-[300px,1fr] h-screen max-h-screen">
      <section className={`bg-white ${!basePath && "hidden"} lg:block`}>
        <Sidebar />
      </section>
      {/* message component */}
      <section className={`${basePath && "hidden"}`}>
        <Outlet />
      </section>

      <div
        className={`justify-center items-center flex-col gap-2 hidden ${
          !basePath ? "hidden" : "lg:flex"
        }`}
      >
        <div>
          <img src={logo} alt="logo" width={250} />
        </div>
        <p className="text-lg mt-2 text-slate-500">
          Select user to send a message
        </p>
      </div>
    </div>
  );
};

export default Home;
