import { Router } from "express";
import { ApplicationController } from "../controllers/application";

export const applicationRouter = Router();

applicationRouter
  .route("/")
  .post(ApplicationController.addApplication)
  .get(ApplicationController.getApplications);

applicationRouter
  .route("/:id")
  .get(ApplicationController.getAnApplication)
  .put(ApplicationController.updateApplication)
  .delete(ApplicationController.deleteApplication);
