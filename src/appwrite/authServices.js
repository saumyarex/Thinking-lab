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

  async signup(name, email, password) {
    try {
      const userCreated = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log("sign user ", userCreated);
      if (userCreated) {
        this.login(email, password);
      }
    } catch (error) {
      console.log("Sign up error: ", error);
      throw error;
    }
  }

  async login(email, password) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  async getCurrentUser() {
    return await this.account.get();
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

  async updatePassword(password) {
    return await this.account.updatePassword(password);
  }

  async deleteAccount(userID) {
    try {
      return this.account.deleteIdentity(userID);
    } catch (error) {
      return error;
    }
  }

  async createUserProfile(fullName, lastName, username, email, phoneNo) {
    return await this.databases.createDocument(
      databaseID,
      userProfileCollectionID,
      ID.unique(),
      {
        fullName,
        lastName,
        username,
        email,
        phoneNo,
      }
    );
  }
}

const authServices = new authService();

export default authServices;
