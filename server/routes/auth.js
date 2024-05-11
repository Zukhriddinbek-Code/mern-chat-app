import express from "express";

const router = express.Router();

import { signup, emailCheck } from "../controllers/auth.js";

//create user api
router.post("/signup", signup);

//checking user email
router.post("/email", emailCheck);

export default router;
