import { PiUserCircle } from "react-icons/pi";

const Avatar = ({ userId, name, imageUrl, width, height }) => {
  //Zuhriddin Ganiev => ZG
  let avatarName = "";

  if (name) {
    const splitName = name?.split(" ");

    if (splitName.length > 1) {
      avatarName = splitName[0][0] + splitName[1][0];
    } else {
      avatarName = splitName[0][0];
    }
  }

  const bgColor = [
    "bg-slate-200",
    "bg-teal-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-gray-200",
    "bg-cyan-200",
    "bg-sky-200",
    "bg-blue-200",
  ];
  const randomBg = Math.floor(Math.random() * 10);

  return (
    <div
      className={`text-slate-800 overflow-hidden rounded-full shadow border text-xl font-bold ${bgColor[randomBg]}`}
      style={{ width: width + "px", height: height + "px" }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          height={height}
          width={width}
          alt={name}
          className="overflow-hidden rounded-full"
        />
      ) : name ? (
        <div
          style={{ width: width + "px", height: height + "px" }}
          className="overflow-hidden rounded-full flex justify-center items-center"
        >
          {avatarName}
        </div>
      ) : (
        <PiUserCircle size={width} />
      )}
    </div>
  );
};

export default Avatar;
