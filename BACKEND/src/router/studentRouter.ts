import { Router } from "express";
import { dashboard } from "src/controllers/student";
import { authenticateToken } from "src/middlewares/authMiddleware";

export const studentRouter = Router();

studentRouter.route("/dashboard").get(authenticateToken, dashboard);
