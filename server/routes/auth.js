import express from "express";

const router = express.Router();

import { signup, emailCheck, passwordCheck } from "../controllers/auth.js";

//create user api
router.post("/signup", signup);

//checking user email
router.post("/email", emailCheck);

//checking password and setting jwt
router.post("/password", passwordCheck);

export default router;
