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
  // console.log(req.headers)
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader?.split(" ")[1];

  console.log("Token from authmiddleware is: ------", token);

  if (!token) {
    res.status(401).json({ message: "Access denied!" });
    return;
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    console.log("Token verification is successful");
    console.log(verified);
    req.body = verified;
    // (req as any).user = verified;
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(403).json({ message: "Invalid Token" });
      return;
    }
    console.log(error);
  }
};
