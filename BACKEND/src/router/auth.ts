import { Router } from "express";
import { login, signup } from "../controllers/auth";

export const router = Router();

router.route("/signup").post(signup);

router.route("/login").post(login);
