import Joi from "joi";
import { model, Schema } from "mongoose";

export const StudentSchemaValidate = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  avatar: Joi.string().optional(),
  phone: Joi.number().optional(),
  city: Joi.string().optional(),
  course: Joi.string().optional(),
  country: Joi.string().optional(),
  applications: Joi.array().items(Joi.string()).optional(),
});

export interface IStudent {
  name: string;
  password: string;
  email: string;
  avatar?: string;
  phone?: number;
  city?: string;
  course?: string;
  country?: string;
  applications?: string[];
}

const studentSchema = new Schema<IStudent>({
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
  },
  city: {
    type: String,
  },
  course: {
    type: String,
  },
  country: {
    type: String,
  },
  applications: {
    type: {
      type: [String],
      default: [],
    },
  },
});

export const Student = model<IStudent>("Student", studentSchema);
// phone, city, course, country,
