/* eslint-disable no-unused-vars */
import { useState } from "react";

const EditUserDetails = ({ user, onClose }) => {
  const [data, setData] = useState("");

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-700 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-4 m-1 rounded w-full max-w-sm">
        <h2 className="font-semibold">Profile details</h2>
        <p className="text-sm">Edit user details</p>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={data.name} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserDetails;
