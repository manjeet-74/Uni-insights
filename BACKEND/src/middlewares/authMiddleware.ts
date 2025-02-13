import { configDotenv } from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

configDotenv();

const JWT_SECRET = process.env.JWT_SECRET || "my_secret_code";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Access denied!" });
    return;
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.body.student = verified;
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(403).json({ message: "Invalid Token" });
      return;
    }
    console.log(error);
  }
};
