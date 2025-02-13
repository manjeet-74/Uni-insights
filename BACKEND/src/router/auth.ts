import { Router } from "express";
import { login, signup } from "src/controllers/auth";

export const router = Router();

router.route("/signup").post(signup);

router.route("/login").post(login);
