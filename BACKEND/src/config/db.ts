import { configDotenv } from "dotenv";
import { connect, set } from "mongoose";

configDotenv();

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDB = async () => {
  try {
    set("strictQuery", false);
    const db = await connect(MONGODB_URI as string);
    if (db) {
      console.log("Connected to  MongoDB");
    } else {
      console.log("Error connecting to mongodb");
    }
  } catch (error: unknown) {
    if (error instanceof Error)
      console.log("Error in Db configuration: ", error);
  }
};
