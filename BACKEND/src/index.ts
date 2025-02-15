import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db";
import bodyParser from "body-parser";
import { routes } from "./router";
import { studentRouter } from "./router/studentRouter";
import cors from "cors";
import cookieParser from "cookie-parser";

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
app.use(
  cors({
    origin: "*", // Allow only frontend origin
    credentials: true, // Allow cookies & authorization headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Root");
});

app.use("/api", routes);
app.use("/api", studentRouter);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
