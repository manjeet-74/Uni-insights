import axios from "axios";

const API_URL = "http://localhost:8080/api";

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
  axios.post(`${API_URL}/signup`, data);
export const loginStudent = async (data: ILoginStudent) =>
  axios.post(`${API_URL}/login`, data);
export const dashboard = async (token: string) =>
  axios.get(`${API_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
