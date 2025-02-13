import express from "express";
import { router } from "./auth";

export const routes = express.Router();

routes.use(router);
