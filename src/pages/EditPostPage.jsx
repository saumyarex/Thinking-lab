import React from "react";
import { PostForm } from "../components";

function EditPostPage() {
  const post = {
    title: "BlockChain",
    slug: "block-chain",
    content:
      "Blockchain is the digital gold and It will become one of the most values asset in the future",
    excerpt: "The age of digital gold",
    status: "Not Active",
    tags: ["seo", "marketing", "social media", "design", "branding"],
    category: "Video Production",
    isFeatured: "Yes",
  };
  return (
    <div>
      <PostForm post={post} />
    </div>
  );
}

export default EditPostPage;
