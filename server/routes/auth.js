import express from "express";

const router = express.Router();

import {
  signup,
  emailCheck,
  passwordCheck,
  userDetails,
} from "../controllers/auth.js";

//create user api
router.post("/signup", signup);

//checking user email
router.post("/email", emailCheck);

//checking password and setting jwt
router.post("/password", passwordCheck);

//loging user details
router.get("/user-details", userDetails);

export default router;
