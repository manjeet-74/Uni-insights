import { Request, Response } from "express";
import { User } from "src/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

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

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User already exists!" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      city,
      country,
      course,
    });
    await newUser.save();
    const token = jwt.sign({ _id: newUser._id, email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({
        message: "Something went wrong! Please try again later",
      });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(409).json({ message: "Invalid credentials" });
      return;
    }

    const isPassweord = await bcrypt.compare(password, user.password);
    if (!isPassweord) {
      res.status(409).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ _id: user._id, email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({
        message: "Something went wrong! Please try again later",
      });
  }
};
