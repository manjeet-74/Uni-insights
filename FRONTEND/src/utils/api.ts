import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();

const API = axios.create({
  baseURL: process.env.API || "http://localhost:8080/api",
  withCredentials: true,
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

export interface ILoginStudent {
  email: string;
  password: string;
}

export const registerStudent = async (data: IStudent) =>
  API.post(`/signup`, data);
export const loginStudent = async (data: ILoginStudent) =>
  API.post(`/login`, data);
export const dashboard = async (token: string) => {
  console.log("Token being sent ", token);
  return API.get(`/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  });
};
