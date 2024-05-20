/* eslint-disable no-unused-vars */
import { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: "",
  });

  const handleOnChange = (e) => {
    const { name, email, password } = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: name };
    });
  };

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4">
        <h3>Welcome to Chat App!</h3>

        <form
          className="grid gap-4 mt-4
         "
        >
          {/* name input field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="john doe"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.name}
              onChange={handleOnChange}
              required
              autocomplete="off"
            />
          </div>

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
              autocomplete="off"
            />
          </div>

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
              onChange={handleOnChange}
              required
              autocomplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
