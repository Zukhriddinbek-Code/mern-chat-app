/* eslint-disable no-unused-vars */
import { useState } from "react";
import { PiUserCircle } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CheckEmail = () => {
  const [data, setData] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${process.env.REACT_APP_backend_url}auth/email`;

    try {
      const response = await axios.post(url, data);
      toast.success(response.data.message);

      //clearing user input
      if (response.data.success) {
        setData({ email: "" });
        navigate("/password", { state: response?.data?.data });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto">
        <div className="w-fit mx-auto mb-2">
          <PiUserCircle size={80} />
        </div>

        <h3>Welcome to Chat App!</h3>

        <form onSubmit={handleFormSubmit} className="grid gap-4 mt-3">
          {/* email input field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@chat.com"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.email}
              onChange={handleOnChange}
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

export default CheckEmail;
