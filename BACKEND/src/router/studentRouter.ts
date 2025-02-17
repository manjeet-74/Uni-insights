import { Router } from "express";
import { dashboard } from "../controllers/student";
import { authenticateToken } from "../middlewares/authMiddleware";

export const studentRouter = Router();

studentRouter.route("/dashboard").get(authenticateToken, dashboard);
