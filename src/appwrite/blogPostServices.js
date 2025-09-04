import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
import {
  apiEndPoint,
  projectID,
  blogsDataCollectionId,
  bucketID,
  databaseID,
  newsletterSubscriberListCollectionID,
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
    if (userId) {
      return await this.getListOfPostsByUserId(userId, pageNo);
    } else if (tags && category && tags.length > 0) {
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [
          Query.limit(9),
          Query.offset((pageNo - 1) * 9),
          Query.equal("tags", tags),
          Query.equal("category", category),
        ]
      );
    } else if (tags && tags.length > 0) {
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [
          Query.limit(9),
          Query.offset((pageNo - 1) * 9),
          Query.equal("tags", tags),
        ]
      );
    } else if (category) {
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [
          Query.limit(9),
          Query.offset((pageNo - 1) * 9),
          Query.equal("category", category),
        ]
      );
    } else if (searchTerm) {
      return await this.searchPosts(searchTerm, pageNo);
    } else {
      return await this.database.listDocuments(
        databaseID,
        blogsDataCollectionId,
        [
          Query.orderDesc("$createdAt"),
          Query.limit(9),
          Query.offset((pageNo - 1) * 9),
        ]
      );
    }
  }

  async getLatestPosts() {
    return await this.database.listDocuments(
      databaseID,
      blogsDataCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(3)]
    );
  }

  async searchPosts(keyword, pageNo) {
    return await this.database.listDocuments(
      databaseID,
      blogsDataCollectionId,
      [
        Query.search("title", keyword),
        Query.limit(9),
        Query.offset((pageNo - 1) * 9),
      ]
    );
  }

  async getListOfPostsByUserId(id, pageNo) {
    return await this.database.listDocuments(
      databaseID,
      blogsDataCollectionId,
      [
        Query.limit(9),
        Query.offset((pageNo - 1) * 9),
        Query.orderDesc("$createdAt"),
        Query.search("userDetailsID", id),
      ]
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

  async subscribeToNewsletter(userDetails) {
    return true;
    // return await this.database.createDocument({
    //   databaseId: databaseID,
    //   collectionId: newsletterSubscriberListCollectionID,
    //   documentId: ID.unique(),
    //   data: userDetails,
    // });
  }
}

const blogPostServices = new blogPostService();

export default blogPostServices;
