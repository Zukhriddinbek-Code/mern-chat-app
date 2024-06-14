/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Avatar from "./Avatar";
import Divider from "./Divider";

const EditUserDetails = ({ user, onClose }) => {
  const [data, setData] = useState({
    name: user?.name,
    profile_pic: user?.profile_pic,
  });

  const uploadPhotoRef = useRef();

  const handleFileUpload = () => {
    uploadPhotoRef.current.click();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-700 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-4 py-6 m-1 rounded w-full max-w-sm">
        <h2 className="font-semibold">Profile details</h2>
        <p className="text-sm">Edit user details</p>

        <form className="grid gap-3 mt-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handleOnChange}
              className="w-full py-1 px-2 focus:outline-primary border-0.5"
            />
          </div>

          <div>
            <div>Photo:</div>
            <div className="my-1 flex items-center gap-4">
              <Avatar
                width={40}
                height={40}
                imageUrl={data.profile_pic}
                name={data?.name}
              />

              <label htmlFor="profile_pic">
                <button className="font-bold" onClick={handleFileUpload}>
                  Change Photo
                </button>
                <input
                  type="file"
                  id="profile_pic"
                  onChange={handleOnChange}
                  className="hidden"
                  ref={uploadPhotoRef}
                />
              </label>
            </div>
          </div>

          <Divider />

          <div className="flex gap-2 w-fit ml-auto">
            <button
              onClick={onClose}
              className="border-primary text-primary border px-4 py-1 rounded hover:bg-primary hover:text-white"
            >
              Cancel
            </button>
            <button
              onSubmit={handleSubmit}
              className="border-primary border px-4 bg-primary text-white py-1 rounded hover:bg-secondary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserDetails;
