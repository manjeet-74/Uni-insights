import { applicationServices } from "@services/application";
import { Request, Response } from "express";
import { ApplicationSchemaValidate } from "../models/Application";

class applicationController {
  addApplication = async (req: Request, res: Response) => {
    const data = {
      title: req.body.title,
      description: req.body.description,
      studentId: req.body.studentId,
      status: req.body.status,
      college: req.body.college,
      course: req.body.course,
      country: req.body.country,
      city: req.body.city,
      date: req.body.date,
      deadline: req.body.deadline,
      documents: req.body.documents,
      comments: req.body.comments,
      rating: req.body.rating,
      feedback: req.body.feedback,
      feedbackDate: req.body.feedbackDate,
    };

    const { error, value } = ApplicationSchemaValidate.validate(data);
    if (error) {
      res.send(error.message);
    } else {
      const application = await applicationServices.createApplication(value);
      res.status(201).send(application);
    }
  };

  getApplications = async (req: Request, res: Response) => {
    const applications = await applicationServices.getApplications();
    res.send(applications);
  };

  getAnApplication = async (req: Request, res: Response) => {
    const id = req.params.id;
    const application = await applicationServices.getApplicationById(id);
    res.send(application);
  };

  updateApplication = async (req: Request, res: Response) => {
    const id = req.params.id;
    const application = await applicationServices.updateApplication(
      id,
      req.body
    );
    res.send(application);
  };

  deleteApplication = async (req: Request, res: Response) => {
    const id = req.params.id;
    const application = await applicationServices.deleteApplication(id);
    console.log(application);
    res.send("appilacation deleted");
  };
}

export const ApplicationController = new applicationController();
