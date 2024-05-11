import UserModel from "../models/User";
import bcryptjs from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, profile_pic } = req.body;

    //check email available true/false
    const checkEmail = await UserModel.findOne({ email: email }); //userModel || null
    if (checkEmail) {
      return res.status(400).json({
        message: "User email already exists!",
        error: true,
      });
    }

    //encrypting password into hashed password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = new UserModel({
      name: name,
      email: email,
      password: hashedPassword,
      profile_pic: profile_pic,
    });
    const saveResult = await user.save();

    return res.status(201).json({
      message: "User created successfully.",
      data: saveResult,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};
