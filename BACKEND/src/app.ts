import expres, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = expres();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Root");
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
