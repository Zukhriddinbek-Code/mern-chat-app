import UserModel from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import userDetailsToken from "../helper/userDetailsToken.js";

export const signup = async (req, res) => {
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

export const emailCheck = async (req, res) => {
  try {
    const { email } = req.body;

    const checkEmail = await UserModel.findOne({ email: email }).select(
      "-password"
    );
    if (!checkEmail) {
      return res.status(404).json({
        message: "User with this email does not exist!",
        error: true,
      });
    }

    return res.status(200).json({
      message: "Email verified",
      success: true,
      data: checkEmail,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || error, error: true });
  }
};

export const passwordCheck = async (req, res) => {
  try {
    const { password, userId } = req.body;
    const userDoc = await UserModel.findById(userId);

    const isEqual = await bcryptjs.compare(password, userDoc.password);
    if (!isEqual) {
      return res.status(401).json({
        message: "Incorrect Password!",
        error: true,
      });
    }

    const token = jwt.sign(
      {
        email: userDoc.email,
        id: userDoc._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    const cookieOptions = { http: true, secure: true };

    return res.cookie("token", token, cookieOptions).status(200).json({
      message: "Logged in successfully",
      token: token,
      success: true,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message || error,
      error: true,
    });
  }
};

export const userDetails = async (req, res) => {
  try {
    const token = req.cookies.token || "";
    const userDoc = await userDetailsToken(token);

    return res.status(200).json({
      message: "user details",
      data: userDoc,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};
