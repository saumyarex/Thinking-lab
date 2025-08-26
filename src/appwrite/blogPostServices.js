import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
import {
  apiEndPoint,
  projectID,
  blogsDataCollectionId,
  bucketID,
  databaseID,
} from "../config/config";

class blogPostService {
  client;
  account;
  database;
  bucket;

  constructor() {
    this.client = new Client().setEndpoint(apiEndPoint).setProject(projectID);
    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async postCreation({
    title,
    slug,
    content,
    excerpt,
    coverImage,
    status,
    userId,
    tags,
    category,
    isFeatured,
  }) {
    return await this.database.createDocument(
      databaseID,
      blogsDataCollectionId,
      ID.unique(),
      {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        status,
        userId,
        tags,
        category,
        isFeatured,
      }
    );
  }

  async postUpdate({
    id,
    title,
    slug,
    content,
    excerpt,
    converImage,
    status,
    userId,
    tags,
    category,
    isFeatured,
  }) {
    try {
      return await this.database.updateDocument(
        databaseID,
        blogsDataCollectionId,
        id,
        {
          title,
          slug,
          content,
          excerpt,
          converImage,
          status,
          userId,
          tags,
          category,
          isFeatured,
        }
      );
    } catch (error) {
      return error;
    }
  }

  async deletePost(id) {
    try {
      return await this.database.deleteDocument(id);
    } catch (error) {
      return error;
    }
  }

  async getPost(id) {
    try {
      return await this.database.getDocument(
        databaseID,
        blogsDataCollectionId,
        id
      );
    } catch (error) {
      return error;
    }
  }

  async getListOfPosts(pageNo) {
    try {
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [Query.limit(10), Query.offset((pageNo - 1) * 10)]
      );
    } catch (error) {
      return error;
    }
  }

  async uploadImage(file) {
    return await this.bucket.createFile(bucketID, ID.unique(), file);
  }

  async deleteImage(fileId) {
    return await this.bucket.deleteFile(bucketID, fileId);
  }
}

const blogPostServices = new blogPostService();

export default blogPostServices;
