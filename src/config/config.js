const apiEndPoint = String(import.meta.env.VITE_API_ENDPOINT);
const projectID = String(import.meta.env.VITE_PROJECT_ID);
const databaseID = String(import.meta.env.VITE_DATABASE_ID);
const userProfileCollectionID = String(
  import.meta.env.VITE_USER_PROFILE_COLLECTION_ID
);
const blogsDataCollectionId = String(
  import.meta.env.VITE_BLOGS_DATA_COLLECTION_ID
);
const bucketID = String(import.meta.env.VITE_BUCKET_ID);
const newsletterSubscriberListCollectionID = String(
  import.meta.env.VITE_NEWSLETTER_SUBSCRIBER_LIST_COLLECTION_ID
);
export {
  apiEndPoint,
  projectID,
  databaseID,
  userProfileCollectionID,
  blogsDataCollectionId,
  newsletterSubscriberListCollectionID,
  bucketID,
};
