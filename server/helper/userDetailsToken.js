import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

const userDetailsToken = async (token) => {
  if (!token) {
    return {
      message: "session out",
      logout: true,
    };
  }

  const decodeUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const userDoc = await UserModel.findById(decodeUser.id);
  return userDoc;
};

export default userDetailsToken;
