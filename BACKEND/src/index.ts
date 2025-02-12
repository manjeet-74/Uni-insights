import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db";

dotenv.config();

connectToDB();

const app: Express = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Root");
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
