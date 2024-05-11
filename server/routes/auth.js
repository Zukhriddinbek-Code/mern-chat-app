import express from "express";

const router = express.Router();

import { signup } from "../controllers/auth.js";

//create user api
router.post("/signup", signup);

export default router;
