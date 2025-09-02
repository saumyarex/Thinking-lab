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
    userDetailsID,
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
        userDetailsID,
        tags,
        category,
        isFeatured,
      }
    );
  }

  async postUpdate(id, newData) {
    return await this.database.updateDocument(
      databaseID,
      blogsDataCollectionId,
      id,
      newData
    );
  }

  async deletePost(id) {
    return await this.database.deleteDocument(
      databaseID,
      blogsDataCollectionId,
      id
    );
  }

  async getPost(id) {
    return await this.database.getDocument(
      databaseID,
      blogsDataCollectionId,
      id
    );
  }

  async getListOfPosts(
    pageNo,
    tags = undefined,
    category = undefined,
    searchTerm = undefined,
    userId = undefined
  ) {
    console.log("Search Term:", searchTerm);
    if (userId) {
      console.log("Post by User Id", userId);
      return await this.getListOfPostsByUserId(userId);
    } else if (tags && category && tags.length > 0) {
      console.log("tags and category");
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [
          Query.limit(10),
          Query.offset((pageNo - 1) * 10),
          Query.equal("tags", tags),
          Query.equal("category", category),
        ]
      );
    } else if (tags && tags.length > 0) {
      console.log("tags");
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [
          Query.limit(10),
          Query.offset((pageNo - 1) * 10),
          Query.equal("tags", tags),
        ]
      );
    } else if (category) {
      console.log(" category", category);
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [
          Query.limit(10),
          Query.offset((pageNo - 1) * 10),
          Query.equal("category", category),
        ]
      );
    } else if (searchTerm) {
      console.log("Seraching ...");
      return await this.searchPosts(searchTerm);
    } else {
      console.log("No tags or category");
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [Query.limit(10), Query.offset((pageNo - 1) * 10)]
      );
    }
  }

  async searchPosts(keyword) {
    return await this.database.listDocuments(
      databaseID,
      blogsDataCollectionId,
      [Query.search("title", keyword)]
    );
  }

  async getListOfPostsByUserId(id) {
    return await this.database.listDocuments(
      databaseID,
      blogsDataCollectionId,
      [Query.search("userDetailsID", id)]
    );
  }

  async uploadImage(file) {
    return await this.bucket.createFile(bucketID, ID.unique(), file);
  }

  async getImage(fileId) {
    return this.bucket.getFilePreview(bucketID, fileId);
  }

  async deleteImage(fileId) {
    return await this.bucket.deleteFile(bucketID, fileId);
  }
}

const blogPostServices = new blogPostService();

export default blogPostServices;
