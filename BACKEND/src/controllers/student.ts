import { Request, Response } from "express";
import { Student } from "../models/Student";

export const dashboard = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const student = await Student.findById(req.body._id);
    console.log("Student is found ---------",student)
    if (!student) {
      res.send(404).json({ message: "Student not found!" });
      return;
    }

    res.status(200).json({
      name: student.name,
      email: student.email,
      dashboard: student.applications,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(401).json({ message: "Server Error" });
      return;
    }
    console.log(error);
  }
};
