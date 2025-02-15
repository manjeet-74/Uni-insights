import { Request, Response } from "express";
import { Student } from "src/models/Student";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { connectToDB } from "src/config/db";

configDotenv();

const JWT_SECRET = process.env.JWT_SECRET || "your_secret _key";

interface IUserRequestBody {
  name: string;
  email: string;
  password: string;
  phone: number;
  city: string;
  course: string;
  country: string;
}

export const signup = async (req: Request, res: Response): Promise<void> => {
  connectToDB();
  try {
    if (!req.body) {
      res.status(400).json({ message: "Invalid request body" });
      return;
    }
    const {
      name,
      email,
      password,
      phone,
      city,
      course,
      country,
    }: IUserRequestBody = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      res.status(409).json({ message: "Student already exists!" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      phone,
      city,
      country,
      course,
    });
    await newStudent.save();
    const token = jwt.sign({ _id: newStudent._id, email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevents JavaScript access
      secure: process.env.NODE_ENV === "production", // Use secure in production
      sameSite: "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res
      .status(201)
      .json({ message: "Student registered successfully!", token });
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({
        message: "Something went wrong! Please try again later",
      });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  connectToDB();
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const student = await Student.findOne({ email });
    if (!student) {
      res.status(409).json({ message: "Invalid credentials" });
      return;
    }

    const isPassweord = await bcrypt.compare(password, student.password);
    if (!isPassweord) {
      res.status(409).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ _id: student._id, email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevents JavaScript access
      secure: process.env.NODE_ENV === "production", // Use secure in production
      sameSite: "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({
        message: "Something went wrong! Please try again later",
      });
  }
};
