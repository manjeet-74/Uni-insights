import { Application, IApplication } from "src/models/Application";

export class applicationService {
  async createApplication(data: IApplication) {
    try {
      const newApplication = new Application(data);
      await newApplication.save();
      return newApplication;
    } catch (error: unknown) {
      console.log(Error);
      return;
    }
  }
  async getApplications() {
    try {
      const applications = await Application.find({});
      return applications;
    } catch (error: unknown) {
      console.log(Error);
      return;
    }
  }
  async getApplicationById(id: string) {
    try {
      const application = await Application.findById(id);
      return application;
    } catch (error: unknown) {
      console.log(Error);
      return;
    }
  }
  async updateApplication(id: string, data: IApplication) {
    try {
      const application = await Application.findByIdAndUpdate(id, data, {
        new: true,
      });
      return application;
    } catch (error: unknown) {
      console.log(Error);
      return;
    }
  }
  async deleteApplication(id: string) {
    try {
      const application = await Application.findByIdAndDelete(id);
      return application;
    } catch (error: unknown) {
      console.log(Error);
      return;
    }
  }
}

export const applicationServices = new applicationService();
