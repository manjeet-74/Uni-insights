import Joi from "joi";
import { model, Schema } from "mongoose";
import { title } from "process";

export const ApplicationSchemaValidate = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  studentId: Joi.string().hex().length(24).required(),
  status: Joi.string().required(),
  college: Joi.string().required(),
  course: Joi.string().required(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  date: Joi.date().required(),
  deadline: Joi.date().optional(),
  documents: Joi.array().items(Joi.string()).optional(),
  comments: Joi.array().items(Joi.string()).optional(),
  rating: Joi.number().optional(),
  feedback: Joi.string().optional(),
  feedbackDate: Joi.date().optional(),
});

export interface IApplication {
  title: string;
  description: string;
  studentId: string;
  status: string;
  college: string;
  course: string;
  country: string;
  city: string;
  date: Date;
  deadline: Date;
  documents?: string[];
  comments?: string[];
  rating?: number;
  feedback?: string;
  feedbackDate?: Date;
}

const ApplicationSchema = new Schema<IApplication>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  college: {
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
  city: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  deadline: {
    type: Date,
  },
  documents: {
    type: {
      type: [String],
      default: [],
    },
  },
  comments: {
    type: {
      type: [String],
      default: [],
    },
  },
  rating: {
    type: Number,
  },
  feedback: {
    type: String,
  },
  feedbackDate: {
    type: Date,
  },
});

export const Application = model<IApplication>(
  "Application",
  ApplicationSchema
);
