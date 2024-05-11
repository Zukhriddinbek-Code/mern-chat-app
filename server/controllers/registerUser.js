import UserModel from "../models/User";

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
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};
