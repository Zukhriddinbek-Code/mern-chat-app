/* eslint-disable no-unused-vars */
import { useState } from "react";
import { PiUserCircle } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Avatar from "../components/Avatar";

const CheckPassword = () => {
  const [data, setData] = useState({
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${process.env.REACT_APP_backend_url}auth/password`;

    try {
      const response = await axios.post(url, data);
      toast.success(response.data.message);

      //clearing user input
      if (response.data.success) {
        setData({ password: "" });
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto">
        <div className="w-fit mx-auto mb-2 flex justify-center items-center flex-col">
          {/* <PiUserCircle size={80} /> */}
          <Avatar
            width={70}
            height={70}
            name={location?.state?.name}
            imageUrl={location?.state?.profile_pic}
          />
          <h2 className="font-semibold text-lg mt-1">
            {location?.state?.name}
          </h2>
        </div>

        <h3>Welcome to Chat App!</h3>

        <form onSubmit={handleFormSubmit} className="grid gap-4 mt-3">
          {/* password input field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*********"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.password}
              required
              autoComplete="off"
            />
          </div>

          <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
            Login
          </button>
        </form>

        <p className="my-3 text-center">
          Don't have an account yet?{" "}
          <Link to={"/register"} className="hover:text-primary font-semibold">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CheckPassword;
