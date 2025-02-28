import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.API || "http://localhost:8080/api",
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
  documents: string[];
  comments: string[];
  rating: Number;
  feedback: string;
  feedbackDate: Date;
}

export interface ILoginStudent {
  email: string;
  password: string;
}

export const registerStudent = async (data: IStudent) =>
  await API.post(`/signup`, data);

export const loginStudent = async (data: ILoginStudent) => {
  const loginResult = await API.post(`/login`, data);
  console.log("Login result is ----------", loginResult);
  return loginResult;
};

export const dashboard = async (token: string) => {
  console.log("Token being sent ", token);
  return await API.get(`/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  });
};

export const applicationSubmit = async (data: IApplication) => {
  if (!data.studentId) {
    console.log("Application is rejected");
    return;
  }
  const applicationSent = await API.post(`/application`, data);
  console.log("Application sent is ----------", applicationSent);
  return applicationSent;
};
