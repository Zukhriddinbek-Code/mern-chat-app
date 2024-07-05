/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";

import LoadingCircle from "./LoadingCircle";
import UserCardSearch from "./UserCardSearch";

const SearchUser = ({ onClose }) => {
  const [searchUser, setSearchUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchUser = async () => {
    const url = `${process.env.REACT_APP_backend_url}auth/search-user`;
    try {
      setLoading(true);
      const response = await axios.post(url, { search: search });
      setLoading(false);
      setSearchUser(response.data.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    handleSearchUser();
  }, [search]);

  console.log(searchUser);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-40 p-2">
      <div className="w-full max-w-lg mx-auto mt-10">
        {/* input search user */}
        <div className="flex bg-white rounded h-14 overflow-hidden">
          <input
            type="text"
            placeholder="search user by name/email"
            className="w-full outline-none py-1 h-full px-4"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="h-14 w-14 flex justify-center items-center">
            <IoSearchOutline size={24} />
          </div>
        </div>

        {/* display search results */}
        <div className="w-full bg-white mt-2 p-4 rounded">
          {/* no user found */}
          {searchUser.length === 0 && !loading && (
            <p className="text-center text-slate-500">No user found!</p>
          )}

          {/* if loading is true */}
          {loading && (
            <p>
              <LoadingCircle />
            </p>
          )}

          {searchUser.length !== 0 &&
            !loading &&
            searchUser.map((user, i) => {
              return (
                <UserCardSearch key={user._id} onClose={onClose} user={user} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
