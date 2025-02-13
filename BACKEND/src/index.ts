import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db";
import bodyParser from "body-parser";
import { routes } from "./router";

dotenv.config();

connectToDB();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Root");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
