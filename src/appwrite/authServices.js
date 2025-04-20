import { Client, Account, ID, Databases } from "appwrite";
import {
  apiEndPoint,
  databaseID,
  projectID,
  userProfileCollectionID,
} from "../config/config";

class authService {
  client;
  account;
  databases;
  constructor() {
    this.client = new Client().setEndpoint(apiEndPoint).setProject(projectID);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  async signup(email, password) {
    try {
      const userCreated = await this.account.create(
        ID.unique(),
        email,
        password
      );
      if (userCreated) {
        this.login(email, password);
      }
    } catch (error) {
      return error;
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      return error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      return error;
    }
  }

  async updateEmail(newEmail, password) {
    try {
      return await this.account.updateEmail(newEmail, password);
    } catch (error) {
      return error;
    }
  }

  async deleteAccount(userID) {
    try {
      return this.account.deleteIdentity(userID);
    } catch (error) {
      return error;
    }
  }

  async userProfile(name, email, phoneNo) {
    try {
      return await this.databases.createDocument(
        databaseID,
        userProfileCollectionID,
        ID.unique(),
        {
          name,
          email,
          phoneNo,
        }
      );
    } catch (error) {
      return error;
    }
  }
}

const authServices = new authService();

export default authServices;
