import Joi from "joi";
import { model, Schema } from "mongoose";

export const UserSchemaValidate = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  avatar: Joi.string(),
  phone: Joi.number(),
  city: Joi.string(),
  course: Joi.string(),
  country: Joi.string(),
});

export interface IUser {
  name: string;
  password: string;
  email: string;
  avatar?: string;
  phone: number;
  city: string;
  course: string;
  country: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: String,
  phone: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

export const User = model<IUser>("User", userSchema);
// phone, city, course, country,
