import { Link } from "react-router-dom";

import Avatar from "./Avatar";

const UserCardSearch = ({ user, onClose }) => {
  return (
    <Link
      to={"/" + user?._id}
      onClick={onClose}
      className="flex items-center gap-2 p-2 lg:p-4 border border-transparent border-b-slate-200 hover:border-primary rounded cursor-pointer"
    >
      <div>
        <Avatar width={50} height={50} name={user?.name} />
      </div>

      <div>
        <div className="font-semibold text-ellipsis line-clamp-1">
          {user?.name}
        </div>
        <p className="text-sm text-ellipsis line-clamp-1">{user.email}</p>
      </div>
    </Link>
  );
};

export default UserCardSearch;
