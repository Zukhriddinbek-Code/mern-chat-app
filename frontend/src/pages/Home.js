/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logout, setUser } from "../redux/userSlice";

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  const fetchUserDetails = async () => {
    try {
      const url = `${process.env.REACT_APP_backend_url}auth/user-details`;
      const userDetails = await axios({ url: url, withCredentials: true });

      dispatch(setUser(userDetails.data.data));

      if (userDetails.data.logout) {
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
