/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  const fetchUserDetails = async () => {
    try {
      const url = `${process.env.REACT_APP_backend_url}auth/user-details`;
      const userDetails = await axios({ url: url, withCredentials: true });
      console.log(userDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  });

  return (
    <div>
      Home
      {/* message component */}
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
